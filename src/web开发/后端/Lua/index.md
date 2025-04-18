---
date: 2025-04-19 07:24:14
title: Lua语言快速入门
categories:
  - web开发
tags:
  - 后端
  - Lua
description: Lua 是一款轻量级、高效灵活、跨平台的多范式编程语言。
coverImg: /banner/1.webp
permalink: /pages/e7b99e
---


![image-20250223204052227](/banner/1.webp)

# Lua语言快速入门

## 环境安装

- 了解更多，请参考：[菜鸟教程-Lua 环境安装](https://www.runoob.com/lua/lua-environment.html)

- Linux 系统(CentOS)

```bash
$ sudo yum install -y epel-release
$ sudo yum install -y lua
```

## 快速体验

### 交互式

```bash
$ man lua                 # 查看 lua 命令行帮助说明
$ lua -v                  # 查看版本信息
$ lua -i                  # 进入交互模式
> print("Hello world!")   # 连续快速两次 Ctrl + C 退出交互模式
```

### 脚本式编程

- 创建 `*.lua` 文件

```lua
#!/usr/local/bin/lua

print("Hello world!")
```

- 赋予可执行权限

```bash
$ chmod 700 hello.lua
```

- 执行脚本

```bash
$ lua hello.lua
# 或者
$ ./hello.lua
```

## 基本语法

### 注释

- 单行注释

> 单行注释以两个连字符 `--` 开头，后面跟随的内容将被解释器忽略。
>
> 单行注释通常用于对代码的简短解释或标记。

```lua
-- 这是单行注释内容
```

- 多行注释

> 多行注释以 `--[[ 开始，并以 --]]` 结束，适用于需要对大段代码进行说明的情况。
>
> `Lua` 不支持嵌套注释。

```lua
--[[
 多行注释
 多行注释
--]]
```

### 标识符

- 标识符以一个字母 `A - Z` 或 `a - z` 或下划线 `_` 开头后加上 `0` 个或多个字母，下划线，数字（0 到 9）。
- 最好不要使用下划线加大写字母的标识符，因为`Lua`的保留字也是这样的。
- `Lua` 不允许使用特殊字符如 `@`, `$`, 和 `%` 来定义标识符。
- `Lua` 是一个区分大小写的编程语言。

### 关键字

| 第一列   | 第二列 | 第三列 | 第四列 |
| :------- | ------ | ------ | -----: |
| and      | break  | do     |   else |
| elseif   | end    | false  |    for |
| function | if     | in     |  local |
| nil      | not    | or     | repeat |
| return   | then   | true   |  until |
| while    | goto   |        |        |

> 一般约定，以下划线开头连接一串大写字母的名字（比如 `_VERSION` ）被保留用于 `Lua` 内部全局变量。

### 全局变量

- 在默认情况下，变量总是认为是全局的。
- 全局变量不需要声明，给一个变量赋值后即创建了这个全局变量。
- 访问一个没有初始化的全局变量也不会出错，只不过得到的结果是 `nil`。

```lua
> print(b)
nil
> b = 15
> print(b)
15
```

- 如果你想删除一个全局变量，只需要将变量赋值为 `nil` 。

```lua
> b = nil
> print(b)
nil
```

- 这样变量 b 就好像从没被使用过一样。换句话说, 当且仅当一个变量不等于 `nil` 时，这个变量即存在。

## Lua 数据类型

- `Lua` 是动态类型语言，变量不要类型定义，只需要为变量赋值。 值可以存储在变量中，作为参数传递或结果返回。
- `Lua` 中有 8 个基本类型分别为：`nil`、`boolean`、`number`、`string`、`userdata`、`function`、`thread` 和 `table`。

| 数据类型 | 描述                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| nil      | 这个最简单，只有值 `nil` 属于该类，表示一个无效值（条件表达式中为 `false` ）。 |
| boolean  | 包含两个值：`false` 和 `true` 。                                               |
| number   | 表示双精度类型的实浮点数                                                       |
| string   | 字符串由一对双引号或单引号来表示                                               |
| function | 由 `C` 或 `Lua` 编写的函数                                                     |
| userdata | 表示任意存储在变量中的 `C` 数据结构                                            |
| thread   | 表示执行的独立线路，用于执行协同程序                                           |
| table    | 数组的索引可以是数字、字符串或表类型。最简单构造表达式是`{}`                   |

> 使用 `type` 函数测试变量类型：

```lua
print(type("Hello world!"))  -- string
```

### 基本数据类型

- 字符串拼接使用 `..`

```lua
print('1' .. '2')
```

- 字符串数字和实数类型数字相加

```lua
print('1' + 3)    -- 会将字符串数字转实数类型，再相加
```

- 字符串单词和数字相加

```lua
print('error' + 1)  -- 报错！
```

- 数字拼接

```lua
print(123 .. 456)
```

- 计算字符串长度使用 `#`

```lua
print(#'Hello')
```

对于其他情况，简言之，字符串数字可以进行转换再进行数学运算，但是字符串单词无法转数字，在运算时就会报错。

### 表

- 在 Lua 里，table 的创建是通过"构造表达式"来完成，最简单构造表达式是{}，用来创建一个空表。也可以在表里添加一些数据，直接初始化表。

```lua
-- 创建一个空的 table
local table1 = {}

-- 直接初始表
local table2 = {"apple", "pear", "orange", "grape"}
```

```lua
local arr = { 'apple', 'banana', 'cherry' }
print(arr[1])  -- Output: apple
```

- `Lua` 中的表（`table`）其实是一个 `关联数组`（associative arrays），数组的索引可以是`数字`或者是`字符串`。

```lua
local arr = { 'apple', 'banana', 'cherry', user = 'John Doe'}

print(arr[1])  -- output: apple
print(arr['user'])  -- output: John Doe

for k, v in pairs(arr) do
  print(k, v)
end
```

- 不同于其他语言的数组把 `0` 作为数组的初始索引，在 `Lua` 里表的默认初始索引一般以 `1` 开始。

```lua
local tbl = {"apple", "pear", "orange", "grape"}

for k, v in pairs(tbl) do
  print(k, v)
end
```

- `table` 不会固定长度大小，有新数据添加时 `table` 长度会自动增长，没初始的 `table` 都是 `nil`。

```lua
tbl = { }

for i = 1, 10 do
  tbl[i] = i
end

tbl['email'] = 'admin@admin.com'

for k, v in pairs(tbl) do
  print(k, v)
end

print(tbl[11])
print(tbl['user'])
```
