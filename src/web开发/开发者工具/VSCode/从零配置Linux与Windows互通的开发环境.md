---
date: 2025-04-19 23:19:49
title: 从零配置Linux与Windows互通的开发环境
permalink: /pages/e47200
categories:
  - web开发
  - 开发者工具
  - VSCode
coverImg: /screenshots/VSCode/搭建linux开发环境.png
top: true
sticky: 3
description: 从零打造 Linux 和 Windows 互通的开发环境
---

# 从零配置 Linux 与 Windows 互通的开发环境

以下配置基于 `Red Hat 8`（红帽8）的 Linux 最基础（无界面）系统，不同的 Linux 发行版会有一些区别，请注意自己系统的是否符合该以上条件。
## 前置条件

> 为避免一些网络问题，先将红帽安全策略和防火墙服务关闭掉

```bash
# 关闭防火墙
$ systemctl stop firewalld --now    # 立即生效
$ systemctl status firewalld
$ systemctl disable firewalld       # 永久禁用
# 关闭 selinux 安全策略
$ setenforce 0      # 本次生效
$ getenforce        # 验证
$ sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config    # 改写配置文件，永久关闭
```

## 一、配置仓库源

- 阿里仓库源地址：[可访问](https://developer.aliyun.com/mirror)

```bash
$ cd /etc/yum.repos.d/
$ wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
$ yum install -y https://mirrors.aliyun.com/epel/epel-release-latest-8.noarch.rpm
$ yum clean all
$ yum repolist
$ yum makecache
```
## 二、配置 ssh 免密连接

- `windows` 生成秘钥

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ cat ~/.ssh/id_rsa.pub     # 复制公钥
```

- `linux` 保存公钥

```bash
$ mkdir -p ~/.ssh
$ chmod 600 ~/.ssh
# 在虚拟机上将内容复制到 authorized_keys 文件中
$ echo "公钥内容" >> ~/.ssh/authorized_keys    # 将 windows 上复制的公钥写入此文件
```

- 尝试 `cmd` 连接

```bash
$ ssh ip@username -i ~/.ssh/id_rsa  # 使用秘钥与目标主机的公钥进行配对连接
```

- `VSCode` 连接 `Linux`

> `VSCode` 下载 `Remote SSH` 插件，在 `~/.ssh/config` 文件中写入如下内容：

```md
Host redhat8
  HostName 192.168.106.132
  User root
  IdentityFile ~/.ssh/id_rsa
  ForwardAgent yes
  ServerAliveInterval 300
  ServerAliveCountMax 300
```

## 三、安装 oh-my-zsh

- 安装 `zsh`

```bash
$ yum install -y git zsh
```

- 安装 `oh-my-zsh`

```bash
$ wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
# 网络问题的话，换使用 sh -c "$(curl -fsSL https://install.ohmyz.sh/)"
$ sh install.sh
$ vim ~/.bashrc
#if [ -t 1 ]; then
#  exec zsh
#fi
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git --depth=1
$ git clone https://github.com/zsh-users/zsh-autosuggestions.git --depth=1
$ vim ~/.zshrc
# plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)
# 如果启用特殊主题，可以安装一下字体或者github寻找更多字体 https://www.nerdfonts.com/
$ sudo dnf install powerline-fonts
```



## 四、配置 Nodejs 环境

### 1. 安装  nvm  版本管理器

```bash
# 在国内，按照 nodejs 官网的教程配置需要设置代理
$ export http_proxy=http://192.168.21.4:7890
$ export https_proxy=http://192.168.21.4:7890
# Download and install nvm:
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
# in lieu of restarting the shell
$ \. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
$ nvm install 22
# Verify the Node.js version:
$ node -v # Should print "v23.10.0".
$ nvm current # Should print "v23.10.0".
# Verify npm version:
$ npm -v # Should print "10.9.2".
```

### 2.  nvm  的常用命令
```bash
# 安装稳定版
$ nvm install node                       # 安装最新版本
$ nvm use node                          # 使用最新版本
$ nvm install --lts                     # 安装最新 LTS 版本
$ nvm use --lts                         # 使用最新 LTS 版本
# 卸载指定版本
$ nvm uninstall 23
$ nvm -h # 查看帮助命令
$ nvm cache clean --force # 清除缓存
$ nvm ls # 列出所有已安装的 Node.js 版本
$ nvm alias default node                # 总是默认使用最新版本
```
### 3. 配置默认使用 Node.js 版本
```bash
# 设置总是默认使用最新版本
$ nvm alias default node
# 配置 bashrc 文件，使得每次启动 shell 时自动使用最新版本
$ echo 'nvm use node' >> ~/.bashrc
```

### 4. 配置 npm 镜像源

- 使用`npm`配置镜像源
```bash
$ npm config set registry https://registry.npmmirror.com
```

- 使用镜像管理工具配置镜像源

```bash
$ npm install -g nrm
$ nrm ls # 列出所有镜像源
$ nrm use taobao # 使用 nrm 命令快速切换淘宝镜像源
```

## 五、配置 Python 环境

### 1. 检查`Python`版本和下载新版本
```bash
$ python3 --version # 红帽、CentOS 默认存在 Python3.6
$ sudo yum install python38
# 建立软链接(以免敲后面版本号)
$ sudo ln -s /usr/bin/python3.8 /usr/bin/python
$ sudo ln -s /usr/bin/pip3.8 /usr/bin/pip
```

### 2. 安装虚拟环境创建工具和管理工具
```bash
$ pip install virtualenv
$ pip install virtualenvwrapper
```

### 3. 配置虚拟环境
```bash
$ mkdir -p ~/.envs
$ chmod 600 ~/.envs
$ vim ~/.bashrc
# 添加以下内容: 这样每次终端会自动加载 ~/.bashrc 文件从而激活虚拟环境管理工具
export WORKON_HOME=~/.envs    # 虚拟环境存放目录
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3.8    # 虚拟环境创建的解释器
export VIRTUALENVWRAPPER_VIRTUALENV=/usr/local/bin/virtualenv    # 虚拟环境管理工具
source /usr/local/bin/virtualenvwrapper.sh    # 激活虚拟环境管理工具
$ source ~/.bashrc
```

### 4. 创建虚拟环境
```bash
$ mkvirtualenv flask_env
```

### 5. 列出虚拟环境
```bash
$ workon  # 列出所有可用的虚拟环境(lsvirtualenv)
```

### 6. 激活虚拟环境
```bash
$ workon flask_env
```

### 7. 退出虚拟环境
```bash
(flask_env)$ deactivate
```



## 六、部署环境搭建

### 1. 运行平台

- RHEL 8 - Linux

### 2. 前置环境

```bash
$ sudo dnf install -y mysql-devel python39-devel gcc
$ scp -r 用户名@ipv4地址:绝对路径 本机路径
```

### 3. 安装数据库

- 参考 [『MySQL安裝』](https://www.zhouyu2156.cn/%E8%BF%90%E7%BB%B4/cloud/#mysql-%E5%AE%89%E8%A3%85)

### 4. 安装项目依赖
```bash
$ pip install -r requirements.txt
```

### 5. 运行项目

```bash
$ python manage.py runserver 0.0.0.0:8080
```

### 6. 配置生产环境 Gunicorn 服务

- 项目根目录下/`gunicorn.conf.py`

```py
import multiprocessing

bind = "127.0.0.1:8081"
workers = multiprocessing.cpu_count() * 2 + 1
errorlog = "/var/log/gunicorn/creativeoasis.error.log"
accesslog = "/var/log/gunicorn/creativeoasis.access.log"
```

- 创建`systemd`服务单元

>  `/etc/systemd/system/gunicorn-creativeoasis.service`

```md
[Unit]
# 服务的描述信息，可自定义
Description=Gunicorn CreativeOasis Server
# 指定服务在网络服务启动后再启动
After=network.target

[Service]
# 指定运行服务的用户
User=root
# 项目的工作目录，即 Django 项目所在的目录
WorkingDirectory=/app/creativeoasis/server
# 启动服务时执行的命令
ExecStart=/root/.envs/django_env/bin/gunicorn \
          -c gunicorn.conf.py config.wsgi:application

[Install]
# 指定服务在多用户模式下启动
WantedBy=multi-user.target
```

- 确保项目目录和虚拟环境可被 systemd 用户访问
```bash
$ sudo chown -R root:root /app/creativeoasis/server
$ sudo chown -R root:root /root/.envs/django_env
```

- 创建日志目录并赋予权限
```bash
$ sudo mkdir -p /var/log/gunicorn
$ sudo chown -R root:root /var/log/gunicorn
$ sudo chmod -R 755 /var/log/gunicorn
```

- `gunicorn`测试命令
```bash
$ python -c "from config.wsgi import application"
```

- 启动并设置开机自启
```bash
# 重新加载系统管理器配置文件
$ sudo systemctl daemon-reload
# 启动服务
$ sudo systemctl start gunicorn-creativeoasis
# 设置服务开机自启
$ sudo systemctl enable gunicorn-creativeoasis
```

- 查看服务状态
```bash
$ sudo systemctl status gunicorn-creativeoasis.service
```

- 重启服务
```bash
$ sudo systemctl restart gunicorn-creativeoasis.service
```

最终效果就是在 `windows` 上编写代码，享受 `linux` 服务器环境，这样提高效率的同时，尽可能保持了与服务器部署环境的一致性。
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ce6901264107493d829350b2eb6b9468.png#pic_center)

如果这篇文章对你有帮助，真心希望你可以给我的微信公众号点个免费的关注，非常感谢。☺️
