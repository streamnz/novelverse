#!/bin/bash

echo "🚀 NovelVerse AWS Amplify 部署脚本"
echo "======================================"

# 清理之前的构建
echo "📦 清理旧的构建文件..."
rm -rf out
rm -f novelverse-static-build.zip

# 构建项目
echo "🔨 构建静态版本..."
npm run build:static

# 检查构建是否成功
if [ ! -d "out" ]; then
    echo "❌ 构建失败，out 目录不存在"
    exit 1
fi

# 压缩文件
echo "📦 压缩构建文件..."
cd out
zip -r ../novelverse-static-build.zip .
cd ..

# 显示文件信息
echo "✅ 构建完成！"
echo ""
echo "📁 构建产物位置："
echo "   - 静态文件目录: ./out/"
echo "   - 压缩包: ./novelverse-static-build.zip"
echo ""
echo "📊 文件大小："
du -h novelverse-static-build.zip
echo ""
echo "🎯 下一步："
echo "   1. 上传 novelverse-static-build.zip 到 AWS Amplify"
echo "   2. 或者直接上传 out/ 目录中的所有文件"
echo ""
echo "🔗 AWS Amplify 控制台: https://console.aws.amazon.com/amplify/" 