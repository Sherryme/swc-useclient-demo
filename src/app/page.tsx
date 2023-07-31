'use client';
import styles from './page.module.css'
import { Layout, Button, ConfigProvider, theme } from "antd";
import theme_darkAlgorithm from 'antd/es/theme/themes/dark';
import { WechatOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <>
        <Layout>
            <Layout.Header>
                header
            </Layout.Header>
            <Layout.Content>

                <Button type={'primary'}>123</Button>
                <Button shape="circle" icon={<WechatOutlined />} />

            </Layout.Content>
            <ConfigProvider
                theme={{
                    algorithm: theme_darkAlgorithm,
                }}
            >
                <Layout.Footer>
                    footer
                </Layout.Footer>
            </ConfigProvider>
        </Layout>
    </>
  )
}
