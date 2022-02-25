#./bin/bash

echo "请输入要改变权限的用户"
read user
echo "请输入要改变权限的文件夹"
read folder_name
echo "要改变的权限的用户为$user,要改变权限的文件夹为$folder_name"

chown -R $user $folder_name | chgrp -R $user $folder_name

echo "修改完成!"