# MongoDB 快速入门

## 安装

> 本教程以 `RedHat 8` 的 `Linux` 操作系统为例，如果是其他系统，除了安装过程不一样，其他命令操作方式基本一致。

```bash
# 安装 mongodb server
$ wget https://repo.mongodb.org/yum/redhat/8/mongodb-org/8.0/x86_64/RPMS/mongodb-org-server-8.0.8-1.el8.x86_64.rpm
$ du -sh ./*                      # 可以查看一下文件大小
$ rpm -ivh ./mongodb-org-server-8.0.8-1.el8.x86_64.rpm
$ systemctl status mongod         # 查看服务状态
$ systemctl enable mongod --now   # 设置开机自启
# 安装命令行工具 cli：https://www.mongodb.com/try/download/shell
$ wget https://downloads.mongodb.com/compass/mongosh-2.5.0-linux-x64.tgz
$ tar -zxvf mongosh-2.5.0-linux-x64.tgz
$ mv mongosh-2.5.0-linux-x64 /usr/local/mongosh
$ ln -s /usr/local/mongosh/bin/mongosh /usr/local/bin/mongosh   # 建立本地安装软件的全局命令
$ mongosh --version   # 验证一下版本
$ mongosh # 进入命令交互界面
```
