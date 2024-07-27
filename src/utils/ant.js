/* 
  注册Ant Design Vue 组件库 
  导入方法：https://blog.csdn.net/lydxwj/article/details/89912983
*/
import {
  ConfigProvider,
  // Layout,
  Input,
  InputNumber,
  Button,
  // Switch,
  Radio,
  Checkbox,
  Select,
  // Card,
  // Form,
  FormModel,
  // Row,
  // Col,
  Modal,
  // Table,
  // Tabs,
  Icon,
  // Badge,
  // Popover,
  // Dropdown,
  // List,
  // Avatar,
  // Breadcrumb,
  // Steps,
  Spin,
  // Menu,
  // Drawer,
  Tooltip,
  // Alert,
  // Tag,
  // Divider,
  DatePicker,
  // TimePicker,
  Upload,
  // Progress,
  // Skeleton,
  // Popconfirm,
  // PageHeader,
  // Result,
  // Statistic,
  // Descriptions,
  message,
  // notification,
  // Collapse,
  // Timeline,
  // AutoComplete,
  // Transfer,
  // TreeSelect,
  Pagination,
  Tree,
  // Cascader,
  // Anchor,
  // Carousel,
  // BackTop,
  Empty
} from 'ant-design-vue'

const importAntd = Vue => {
  Vue.use(ConfigProvider)
  // Vue.use(Layout)
  Vue.use(Input)
  Vue.use(InputNumber)
  Vue.use(Button)
  // Vue.use(Switch)
  Vue.use(Radio)
  Vue.use(Checkbox)
  Vue.use(Select)
  // Vue.use(Card)
  // Vue.use(Form)
  Vue.use(FormModel)
  // Vue.use(Row)
  // Vue.use(Col)
  Vue.use(Modal)
  // Vue.use(Table)
  // Vue.use(Tabs)
  Vue.use(Icon)
  // Vue.use(Badge)
  // Vue.use(Popover)
  // Vue.use(Dropdown)
  // Vue.use(List)
  // Vue.use(Avatar)
  // Vue.use(Breadcrumb)
  // Vue.use(Steps)
  Vue.use(Spin)
  // Vue.use(Menu)
  // Vue.use(Drawer)
  Vue.use(Tooltip)
  // Vue.use(Alert)
  // Vue.use(Tag)
  // Vue.use(Divider)
  Vue.use(DatePicker)
  // Vue.use(TimePicker)
  Vue.use(Upload)
  // Vue.use(Progress)
  // Vue.use(Skeleton)
  // Vue.use(Popconfirm)
  // Vue.use(PageHeader)
  // Vue.use(Result)
  // Vue.use(Statistic)
  // Vue.use(Descriptions)
  // Vue.use(Collapse)
  // Vue.use(Timeline)
  // Vue.use(AutoComplete)
  // Vue.use(Transfer)
  // Vue.use(TreeSelect)
  Vue.use(Pagination)
  Vue.use(Tree)
  // Vue.use(Cascader)
  // Vue.use(Anchor)
  // Vue.use(Carousel)
  // Vue.use(BackTop)
  Vue.use(Empty)
  Vue.prototype.$message = message
  Vue.prototype.$Message = message
  // Vue.prototype.$notification = notification
  Vue.prototype.$confirm = Modal.confirm
  // Vue.prototype.$info = Modal.info
  // Vue.prototype.$success = Modal.success
  // Vue.prototype.$error = Modal.error
  // Vue.prototype.$warning = Modal.warning
}

export default importAntd
