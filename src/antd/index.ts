import {
  Form,
  Button,
  Input,
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Tabs
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const components = [
  Form,
  Button,
  Input,
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Tabs
]

export function setupAntd (app: any): any {
  components.forEach(component => {
    app.use(component)
  })
}
