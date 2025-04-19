---
date: 2025-04-19 15:24:14
title: C++语言快速入门
categories:
  - 后端
tags:
  - C++
description: C++是一种静态类型的中级语言，综合了高级语言和低级语言的特点
coverImg: /banner/8.webp
permalink: /pages/2aeaba
---


# C++语言快速入门

## 安装 `C++` 编译环境

```bash
# $ sudo subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
$ sudo dnf install -y gcc gcc-c++ make
# 或者安装完整的开发工具组（包含更多工具如gdb、git等）
$ sudo dnf groupinstall -y "Development Tools"
# 检查安装
$ gcc --version
$ g++ --version
$ make --version
```

## 第一个 `C++` 程序

```c++
// main.cpp

#include <iostream>
using namespace std;

int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```

- 执行

```bash
$ g++ main.cpp -o main    # 编译
$ ./main                  # 执行
# 执行权限
$ ll
$ chmod +x ./main
```

## 基本语法
### 关键字

| 第一列       | 第二列    | 第三列           | 第四列   |
| ------------ | --------- | ---------------- | -------- |
| asm          | else      | new              | this     |
| auto         | enum      | operator         | throw    |
| bool         | explicit  | private          | true     |
| break        | export    | protected        | try      |
| case         | extern    | public           | typedef  |
| catch        | false     | register         | typeid   |
| char         | float     | reinterpret_cast | typename |
| class        | for       | return           | union    |
| const        | friend    | short            | unsigned |
| const_cast   | goto      | signed           | using    |
| continue     | if        | sizeof           | virtual  |
| default      | inline    | static           | void     |
| delete       | int       | static_cast      | volatile |
| do           | long      | struct           | wchar_t  |
| double       | mutable   | switch           | while    |
| dynamic_cast | namespace | template         |

### 注释
::: tip
- 程序的注释是解释性语句，您可以在 C++ 代码中包含注释来提高源代码的可读性。所有的编程语言都允许某种形式的注释。
- `C++` 支持单行注释和多行注释。注释中的所有字符会被 `C++` 编译器忽略。
:::

C++ 注释一般有两种：

- `//` 一般用于单行注释。

- `/* 注释内容 */` 一般用于多行注释。

### 数据类型

::: info 
变量保留的是它所存储的值的内存位置。这意味着，当您创建一个变量时，就会在内存中保留存放某种类型数据的空间。

操作系统会根据变量的数据类型，来分配内存和决定在保留内存中存储什么。
:::

#### 基本的内置类型

> `C++` 为程序员提供了种类丰富的内置数据类型和用户自定义的数据类型。下表列出了七种基本的 `C++` 数据类型：

| 类型     | 关键字  |
| -------- | ------- |
| 布尔型   | bool    |
| 字符型   | char    |
| 整型     | int     |
| 浮点型   | float   |
| 双浮点型 | double  |
| 无类型   | void    |
| 宽字符型 | wchar_t |

> 其实 `wchar_t` 是这样来的，所以 wchar_t 实际上的空间是和 short int 一样。

```c++
typedef short int wchar_t;
```

#### 修饰符

| 修饰符   | 描述                                   | 示例                 |
| -------- | -------------------------------------- | -------------------- |
| signed   | 表示有符号类型（默认）                 | signed int x = -10;  |
| unsigned | 表示无符号类型                         | unsigned int y = 10; |
| short    | 表示短整型                             | short int z = 100;   |
| long     | 表示长整型                             | long int a = 100000; |
| const    | 表示常量，值不可修改                   | const int b = 5;     |
| volatile | 表示变量可能被意外修改，禁止编译器优化 | volatile int c = 10; |
| mutable  | 表示类成员可以在 const 对象中修改      | mutable int counter; |

> 关于各种数据类型的长度可自行查看 [菜鸟教程](https://www.runoob.com/cplusplus/cpp-data-types.html)

#### `C++ 11` 新增类型

| 数据类型              | 描述                               | 示例                                           |
| --------------------- | ---------------------------------- | ---------------------------------------------- |
| auto                  | 自动类型推断                       | `auto x = 10;`                                 |
| decltype              | 获取表达式的类型                   | `decltype(x) y = 20;`                          |
| nullptr               | 空指针常量                         | `int* ptr = nullptr;`                          |
| std::initializer_list | 初始化列表类型                     | `std::initializer_list<int> list = {1, 2, 3};` |
| std::tuple            | 元组类型，可以存储多个不同类型的值 | `std::tuple<int, float, char> t(1, 2.0, 'a');` |

#### 派生数据类型

| 数据类型 | 描述                                           | 示例                               |
| -------- | ---------------------------------------------- | ---------------------------------- |
| 数组     | 相同类型元素的集合                             | `int arr[5] = {1, 2, 3, 4, 5};`    |
| 指针     | 存储变量内存地址的类型                         | `int* ptr = &x;`                   |
| 引用     | 变量的别名                                     | `int& ref = x;`                    |
| 函数     | 函数类型，表示函数的签名                       | `int func(int a, int b);`          |
| 结构体   | 用户定义的数据类型，可以包含多个不同类型的成员 | `struct Point { int x; int y; };`  |
| 类       | 用户定义的数据类型，支持封装、继承和多态       | `class MyClass { ... };`           |
| 联合体   | 多个成员共享同一块内存                         | `union Data { int i; float f; };`  |
| 枚举     | 用户定义的整数常量集合                         | `enum Color { RED, GREEN, BLUE };` |

#### 类型别名

| 别名    | 描述                             | 示例               |
| ------- | -------------------------------- | ------------------ |
| typedef | 为现有类型定义别名               | typedef int MyInt; |
| using   | 为现有类型定义别名（C++11 引入） | using MyInt = int; |

#### 标准库类型

| 数据类型    | 描述             | 示例                                               |
| ----------- | ---------------- | -------------------------------------------------- |
| std::string | 字符串类型       | `std::string s = "Hello";`                         |
| std::vector | 动态数组         | `std::vector<int> v = {1, 2, 3};`                  |
| std::array  | 固定大小数组     | `（C++11 引入）	std::array<int, 3> a = {1, 2, 3};` |
| std::pair   | 存储两个值的容器 | `std::pair<int, float> p(1, 2.0);`                 |
| std::map    | 键值对容器       | `std::map<int, std::string> m;`                    |
| std::set    | 唯一值集合       | `std::set<int> s = {1, 2, 3};`                     |

#### typedef 声明

