import styles from './page.module.css'
import { Layout, Button, ConfigProvider, theme } from "antd";
import { Header, Content, Footer } from 'antd/es/layout/layout';
import theme_darkAlgorithm from 'antd/es/theme/themes/dark';
import { WechatOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <>
        <Layout>
            <Header>
                header
            </Header>
            <Content>

                <Button type={'primary'}>123</Button>
                <Button shape="circle" icon={<WechatOutlined />} />

            </Content>
            <ConfigProvider
                theme={{
                    algorithm: theme_darkAlgorithm,
                }}
            >
                <Footer>
                    footer
                </Footer>
            </ConfigProvider>
        </Layout>
    </>
  )
}
