---
date: 2025-04-23 08:04:44
title: jq快速入门
permalink: /pages/3e303d
categories:
  - web开发
  - 开发者工具
  - 实用工具
---

# jq 快速入门

::: tip 介绍

- 推荐：[前往官网](https://jqlang.org/)

`jq` 是一种轻量级命令行 JSON 处理工具，它可以处理`JSON`格式文本并提供查询、过滤和转换等功能。它可以在 `Linux` 、`Mac OS` 和 `Windows` 等操作系统上运行，并且还可以和 `curl` 等工具配合使用。

`jq` 程序本身就是一个 `过滤器` ：它接受输入，并产生输出。它内置了许多过滤器，用于作为提取对象的特定字段，有的将数字转换为字符串，有的执行其他各种标准任务。

过滤器可以以多种方式组合——您可以将一个过滤器的输出通过管道传输到另一个过滤器中，或者将过滤器的输出收集到对象或数组中等等。

:::

## 安装

```bash
$ sudo dnf install -y jq
```

## 基本使用

### 初体验

```bash
# $ curl -o commits.json 'https://api.github.com/repos/jqlang/jq/commits?per_page=5'    # 可以将官方示例数据下载到本地
$ curl 'https://api.github.com/repos/jqlang/jq/commits?per_page=5' | jq '.'
```

下面所有命令默认都已经使用 `curl`、`cat` 等命令获取到了 `JSON` 格式的文本，并通过管道符将数据传递给了 `jq` 工具，因此我将忽略这些重复的命令。

### 遍历数组

- 获取指定元素

```bash
$ jq ".[0]"
```

- 获取每个元素

对数组元素进行遍历，并返回每个对象

```bash
$ jq ".[]"
```

### 过滤提取

- `|` 过滤管道

将前面返回的对象作为输入，并应用管道符后面的过滤器对数据进行提取

```bash
$ jq ".[] | { name: .name, email: .email }"
```

### 小试牛刀

- 目标数据

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "123456@qq.com",
    "address": {
      "province": "Guangdong",
      "city": "Shenzhen",
      "district": "Nanshan",
      "street": "Nanshan Road"
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "456789@qq.com",
    "address": {
      "province": "Guangdong",
      "city": "Shenzhen",
      "district": "Nanshan",
      "street": "Nanshan Road"
    }
  }
]
```

- 构建输出包含姓名和邮箱的用户对象数组

```bash
$ cat data.json | jq "[.[] | { name: .name, email: .email }]" > new_data.json
```

- 输出

```bash
[
  {
    "name": "John Doe",
    "email": "123456@qq.com"
  },
  {
    "name": "Jane Smith",
    "email": "456789@qq.com"
  }
]
```

- 构建输出对象中分别保存姓名和邮箱的数组

```bash
$ cat data.json | jq "{ users: [.[] | .name ] }" > format_data.json
```

- 输出

```json
{
  "users": ["John Doe", "Jane Smith"],
  "emails": ["123456@qq.com", "456789@qq.com"]
}
```
