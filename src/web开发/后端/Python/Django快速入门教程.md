---
date: 2025-04-21 18:17:55
title: Django快速入门教程
permalink: /pages/5e2304
categories:
  - 后端
  - Python
tags:
  - Django
description: Django 哲学宗旨：懂得越多，写得越少
coverImg: /screenshots/Python/Django快速入门教程.png
---

# Django 快速入门

## 安装 Django

```bash
$ pip install django
```

## 创建项目

```bash
$ mkdir <项目名称>                                    # 先创建项目目录
$ django-admin startproject [<settings>] <项目名称>   # settings 是配置目录名称。如果不指定，配置目录的名称与项目名称一致
$ cd <项目名称>
```

::: tip 目录结构

- `manage.py`：管理 `Django` 项目的命令行工具。
- `settings/`：项目系统配置目录。
- `settings/settings.py`：`Django` 项目的配置文件。
- `settings/urls.py`：Django 项目的 URL 声明，就像你网站的 `路由` 。
- `settings/asgi.py`：项目运行在 `ASGI` 兼容的 `Web` 服务器上的入口。
- `settings/wsgi.py`：项目运行在 `WSGI` 兼容的 `Web` 服务器上的入口

:::

## 迁移数据库

```bash
$ python manage.py makemigrations   # 生成迁移脚本
$ python manage.py migrate          # 应用迁移数据库脚本
```

## 启动服务器

```bash
$ python manage.py runserver 0.0.0.0:8080   # 可以指定局域网公开和端口号
```

## 创建应用

```bash
$ python manage.py startapp <应用名称>        # 创建一个新的应用
```

> 在 `Django` 中，每一个应用都是一个 `Python` 包，并且遵循着相同的约定。`Django` 自带一个工具，可以帮你生成应用的基础目录结构，这样你就能专心写代码，而不是创建目录了。

- 在生成的 `urls.py` 中，`path()` 函数至少需要两个参数：`route` 和 `view`。
- `include()` 函数允许引用其他 `URLconfs` 。每当 `Django` 遇到 `include()` 时，它会截断 URL 中匹配到该点的部分，并将剩余的字符串发送到包含的 `URLconf` 以进行进一步处理。

## 创建管理员

```bash
$ python manage.py createsuperuser
# ...
```
