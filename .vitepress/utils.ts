import fs, { readdirSync } from 'fs'
import path from 'path'
import { type DefaultTheme } from 'vitepress'

const ROOT = process.cwd()

interface DirStructure {
    name: string
    path: string
    children?: DirStructure[]
}

/**
 * 获取目录结构
 */
const getDirStructure = (dirPath: string, excludeDirs: string[] = []): DirStructure[] => {
    const result: DirStructure[] = []
    const files = readdirSync(dirPath)

    for (const file of files) {
        if (file.startsWith('.') || excludeDirs.includes(file)) continue

        const fullPath = path.resolve(dirPath, file)
        const relativePath = path.relative(ROOT, fullPath)

        if (fs.statSync(fullPath).isDirectory()) {
            result.push({
                name: file,
                path: relativePath,
                children: getDirStructure(fullPath, excludeDirs)
            })
        }
    }

    return result
}

/**
 * 生成导航栏配置
 */
export const generateNav = (options: {
    source: string
    excludeDirs?: string[]
} = {
    source: 'src',
    excludeDirs: ['public', 'images']
}): DefaultTheme.NavItem[] => {
    const { source, excludeDirs = ['public', 'images'] } = options
    const srcPath = path.resolve(ROOT, source)
    const structure = getDirStructure(srcPath, excludeDirs)

    const navItems: DefaultTheme.NavItem[] = [
        { text: '首页', link: '/' }
    ]

    for (const firstLevel of structure) {
        const navItem: DefaultTheme.NavItem = {
            text: firstLevel.name,
            items: []
        }

        for (const secondLevel of firstLevel.children || []) {
            const subNav = {
                text: secondLevel.name,
                items: (secondLevel.children || []).map(thirdLevel => ({
                    text: thirdLevel.name,
                    link: `/${firstLevel.name}/${secondLevel.name}/${thirdLevel.name}/`
                }))
            } as DefaultTheme.NavItemWithChildren & { items: DefaultTheme.NavItemWithLink[] }

            navItem.items?.push(subNav)
        }

        navItems.push(navItem)
    }

    return navItems
}

/**
 * 生成侧边栏配置
 */
export const generateSidebar = (options: {
    source: string
    excludeDirs?: string[]
} = {
    source: 'src',
    excludeDirs: ['public', 'images']
}): DefaultTheme.Sidebar => {
    const { source, excludeDirs = ['public', 'images'] } = options
    const srcPath = path.resolve(ROOT, source)
    const structure = getDirStructure(srcPath, excludeDirs)
    const sidebar: DefaultTheme.Sidebar = {}

    for (const firstLevel of structure) {
        for (const secondLevel of firstLevel.children || []) {
            const basePath = `/${firstLevel.name}/${secondLevel.name}/`
            sidebar[basePath] = []

            for (const thirdLevel of secondLevel.children || []) {
                // 读取该目录下的所有 .md 文件
                const thirdLevelPath = path.resolve(srcPath, firstLevel.name, secondLevel.name, thirdLevel.name)
                const mdFiles = readdirSync(thirdLevelPath)
                    .filter(file => file.endsWith('.md') && file !== 'index.md')
                    .map(file => ({
                      text: file.replace('.md', ''),
                      link: `${basePath}${thirdLevel.name}/${file.replace('.md', '')}`
                  }))

                if (mdFiles.length > 0) {
                    sidebar[basePath].push({
                        text: thirdLevel.name,
                        collapsed: false,
                        items: mdFiles
                    })
                }
            }
        }
    }

    return sidebar
}
