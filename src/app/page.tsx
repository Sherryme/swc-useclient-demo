import styles from './page.module.css'
import {Layout, Button} from "antd";
import {WechatOutlined} from "@ant-design/icons";

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
            <Layout.Footer>
                footer
            </Layout.Footer>
        </Layout>
    </>
  )
}
