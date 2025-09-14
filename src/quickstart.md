# 快速开始

## 1. 准备工作

### 1.1 安装 Docker 环境

在部署前，请确保您的服务器/本地环境已安装 Docker。根据您的操作系统选择以下安装方式（推荐自行查询资料安装）：

**Linux (Ubuntu/Debian)**
```bash
# 卸载旧版本（如有）
sudo apt-get remove docker docker-engine docker.io containerd runc

# 更新软件包索引
sudo apt-get update

# 安装依赖
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 设置稳定版仓库
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# 验证安装
sudo docker run hello-world
```

**CentOS/RHEL**
```bash
# 卸载旧版本
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 安装依赖
sudo yum install -y yum-utils

# 添加稳定版仓库
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker Engine
sudo yum install docker-ce docker-ce-cli containerd.io

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
sudo docker run hello-world
```

**MacOS**
- 下载 Docker Desktop for Mac: [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

**Windows**
- 下载 Docker Desktop for Windows: [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

---

## 2. 部署 iSpace 应用

### 2.1 拉取 Docker 镜像（可选）

虽然可以直接使用镜像名称运行，但建议先手动拉取以确保镜像存在：

```bash
docker pull crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
```

### 2.2 运行容器

使用以下命令启动 iSpace 应用容器：

```bash
docker run -d \
  -p 8087:80 \  # 将容器内的80端口映射到主机的8087端口
  --name ispace \  # 容器名称
  crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
```

**参数说明**：
- `-d`: 后台运行容器
- `-p 8087:80`: 端口映射（主机端口:容器端口）
- `--name ispace`: 为容器指定名称
- 最后是完整的镜像地址

---

## 3. 访问网站

### 3.1 通过浏览器访问

容器启动后，您可以通过以下方式访问 iSpace 应用：

1. **本地运行**：
   - 打开浏览器访问 [http://localhost:8087/app/desktop/home](http://localhost:8087/app/desktop/home)
   - 默认账号密码为：
       - （账号）pix 
       - （密码）123456

2. **服务器运行**：
   - 确保服务器的安全组/防火墙已开放8087端口
   - 访问 [http://<服务器公网IP>:8087/app/desktop/home](http://<服务器公网IP>:8087/app/desktop/home)
   - 默认账号密码为：
       - （账号）pix 
       - （密码）123456

### 3.2 验证部署

您应该能看到 iSpace 网站的登录页或桌面页。如果无法访问，请检查：

1. 容器是否正常运行：
   ```bash
   docker ps -a | grep ispace
   ```

2. 查看容器日志：
   ```bash
   docker logs ispace
   ```

3. 检查端口映射是否正确：
   ```bash
   docker port ispace
   ```

---

## 4. 高级配置（可选）

### 4.1 使用 Docker Compose

创建 `docker-compose.yml` 文件：

```yaml
version: '3'
services:
  ispace:
    image: crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
    container_name: ispace
    ports:
      - "8087:80"
    restart: unless-stopped
```

然后使用以下命令启动：
```bash
docker-compose up -d
```

### 4.2 数据持久化（如需）

如果网站需要持久化数据（如上传的文件、数据库等），可以添加数据卷挂载：

```bash
docker run -d \
  -p 8087:80 \
  --name ispace \
  -v /path/to/host/data:/home \  # 替换为实际路径
  crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
```

---

## 5. 常见问题解决

1. **端口冲突**：
   - 修改 `-p` 参数中的主机端口号（如改为 `8088:80`）

2. **镜像拉取失败**：
   - 确保网络可以访问阿里云容器镜像服务
   - 检查镜像地址是否正确

3. **容器启动后立即退出**：
   - 查看日志 `docker logs ispace`
   - 可能是应用启动失败或配置错误

4. **访问超时**：
   - 检查服务器安全组是否放行8087端口
   - 确认服务器防火墙设置

---

## 6. 维护与更新

### 6.1 停止并删除旧容器

```bash
docker stop ispace
docker rm ispace
```

### 6.2 拉取最新镜像（如有更新）

```bash
docker pull crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
```

### 6.3 重新启动容器

```bash
docker run -d -p 8087:80 --name ispace crpi-1j5s6p97cpzwcsn0.cn-hangzhou.personal.cr.aliyuncs.com/pixelbai/ispace:1.1
```

或使用 Docker Compose：
```bash
docker-compose pull
docker-compose up -d
```

---

**恭喜！您已成功部署了 iSpace 应用。** 如需进一步帮助，请联系技术支持或参考项目文档。