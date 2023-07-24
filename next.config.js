/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [
            [
                "use-client",
                {
                    include: ["antd", "@ant-design/icons"],
                },
            ],
        ],
    },
}

module.exports = nextConfig
