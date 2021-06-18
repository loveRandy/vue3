import {
  Form,
  Input,
  Button,
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  Avatar,
  Tabs,
  Table,
  Alert,
  Card,
  List,
  Pagination,
  Divider,
  Popconfirm,
  Modal,
  Select,
  Result,
  Carousel 
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const components = [
  Form,
  Input,
  Button,
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  Avatar,
  Tabs,
  Table,
  Alert,
  Card,
  List,
  Pagination,
  Divider,
  Popconfirm,
  Modal,
  Select,
  Result,
  Carousel 
]

export function setupAntd (app: any): any {
  components.forEach(component => {
    app.use(component)
  })
}
