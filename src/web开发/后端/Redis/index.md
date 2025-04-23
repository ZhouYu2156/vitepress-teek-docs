---
date: 2025-04-24 00:09:20
title: Redis 快速入门
permalink: /pages/a65ab1
categories:
  - 后端
tags:
  - Redis
---

# Redis 快速入门

- 推荐：[前往 Redis 参考文档](https://redis.io/docs/latest/commands/?group=list)

## 安装与启动

```bash
$ sudo yum install -y redis
$ redis-server
$ redis-cli     # 可以进入命令行交互界面
```

## 基本操作

```bash
$ SET key value   # 设置键值对
$ GET key         # 获取键 -> 值
$ DEL key         # 删除键
$ EXISTS key      # 判断键是否存在
$ KEYS *          # 获取所有键
$ FLUSHALL        # 删除所有键
$ FLUSHDB         # 删除当前数据库的所有键
$ DBSIZE          # 获取当前数据库的键数量
$ INFO            # 获取当前数据库的信息
$ quit            # 退出命令行 (或者 exit)
```

## 设置中文

```bash
$ redis-cli --raw   # 默认 redis 值是二进制显示的
```

## 数据类型

| 数据类型    | 名称     |
| :---------- | :------- |
| `基本类型`  |          |
| String      | 字符串   |
| List        | 列表     |
| Set         | 集合     |
| SortedSet   | 有序集合 |
| Hash        | 哈希     |
| `高级类型`  |          |
| Stream      | 消息队列 |
| Geospatial  | 地理空间 |
| HyperLogLog |          |
| Bitmap      | 位图     |
| Bitfield    | 位域     |

## 基本操作方法

- 获取键过期时间

| 数值 | 含义             |
| :--- | :--------------- |
| -1   | 没有设置过期时间 |
| -2   | 键不存在         |

```bash
$ TTL key
```

- 设置键过期时间

```bash
$ EXPIRE key seconds
```

- 设置键值过期时间

```bash
$ SETEX key seconds value   # 设置键值对和过期时间
$ setnx key value           # 如果键不存在则设置键值，存在不做如何操作
$ SETEX code 30 a89z5x      # 设置一个验证码过期时间
```

## 列表

- 特点：
  - 列表是一个双向链表，支持从两端插入和删除元素。
  - 列表的元素可以是任意类型的数据。
  - 列表的元素是有序的，可以通过索引来访问。
  - 列表的长度是动态的，可以根据需要进行扩展。
  - 列表的元素可以重复。

| 命令                                                   | 功能                                                        |
| :----------------------------------------------------- | :---------------------------------------------------------- |
| `LPUSH key value1 [value2 value3]`                     | 从左边插入元素                                              |
| `RPUSH key value1 [value2 value3]`                     | 从右边插入元素                                              |
| `LRANGE key start stop`                                | 获取列表元素，0 -1 表示获取从第一个到最后一个位置的所有元素 |
| `LPOP key`                                             | 从左边删除元素，返回删除的元素                              |
| `RPOP key`                                             | 从右边删除元素，返回删除的元素                              |
| `LPOP key count`                                       | 从左边删除指定数量的元素                                    |
| `RPOP key count`                                       | 从右边删除指定数量的元素                                    |
| `LLEN key`                                             | 获取列表长度                                                |
| `LREM key count value`                                 | 移除列表中指定的元素                                        |
| `LSET key index value`                                 | 设置列表中指定位置的元素                                    |
| `LINDEX key index`                                     | 获取列表中指定位置的元素                                    |
| `LTRIM key start stop`                                 | 保留列表中指定范围的元素，剔除其他元素                      |
| `LINSERT key before              \| after pivot value` | 在列表中指定元素的前面或后面插入元素                        |

## 集合

- 特点：
  - 集合是一个无序的元素集合，元素是唯一的，不允许重复。
  - 集合的元素可以是任意类型的数据。
  - 集合的长度是动态的，可以根据需要进行扩展。
  - 集合的元素没有顺序。

| 命令                              | 功能                                                               |
| :-------------------------------- | :----------------------------------------------------------------- |
| `SADD key value1 [value2 value3]` | 向集合中添加元素                                                   |
| `SMEMBERS key`                    | 获取集合中的所有元素                                               |
| `SREM key value1 [value2 value3]` | 从集合中删除指定元素                                               |
| `SISMEMBER key value`             | 判断元素是否在集合中，`0` 表示元素不在集合中，`1` 表示元素在集合中 |
| `集合运算`                        | `...`                                                              |

## 有序集合

| 命令                                   | 功能                                           |
| :------------------------------------- | :--------------------------------------------- |
| `ZADD key score member [score member]` | 添加元素                                       |
| `ZCARD key`                            | 获取集合元素数量                               |
| `ZRANGE key start stop [WITHSCORES]`   | 获取集合成员（分数）                           |
| `ZRANK key member`                     | 获取成员排名（按照分数从小到大得到的排序索引） |
| `ZSCORE key member`                    | 获取成员分数                                   |
| `ZREVRANK key member`                  | 获取成员排名                                   |
| `ZREM key member1 [member2 member3]`   | 删除成员                                       |
| `其他操作`                             | `...`                                          |
