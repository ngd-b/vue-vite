import { ref, reactive, defineComponent, onMounted } from 'vue'
import { mapState } from 'vuex'
import './App.less'
import { uesSystemStore } from '@/store/system.js'

// 路由地址
import { routerMenus } from './routers'
// defineComponent  只返回传递给它的对象；
// 此处IDE支持
export default defineComponent({
    props: {

    },
    setup(props, context) {
        /**
             * props - 父组件数据属性传递
             * context - 组件属性，比如$attrs,$emit,$slots等
             */
        // const { name } = toRef(props)

        // 创建响应式数据
        const count = ref(0)
        const user = reactive({ name: '', age: 21 })

        // 获取到pinia的数据
        const systemStore = uesSystemStore()

        return {
            count,
            user,
            systemStore
        }
    },
    computed: {
        ...mapState({
            systemName: state => state.systemName
        })
    },
    methods: {
        handleAddCount() {
            this.count++
        }
    },
    render() {
        return <>
            {this.systemStore.showAside
                ? <el-container class="app-container">
                    <el-header>
                        <h1>{this.systemName}</h1>
                    </el-header>
                    <el-container>
                        <el-aside width="200px">
                            <el-menu
                                router
                                active-text-color="#ffd04b"
                                background-color="#545c64"
                                class="el-menu-vertical-demo"
                                default-active="2"
                                text-color="#fff"
                            >
                                {routerMenus.map((item, index) => <el-menu-item key={index} index={item.path}>
                                    <el-icon><item.meta.icon /></el-icon>
                                    <span>{item.meta.title}</span>
                                </el-menu-item>)}
                            </el-menu>
                        </el-aside>
                        <el-main>
                            <router-view></router-view>
                            {/* <el-scrollbar>
                                <router-view></router-view>
                            </el-scrollbar> */}
                        </el-main>
                    </el-container>
                </el-container>
                : <el-container class="app-container">
                    <router-view></router-view>
                </el-container>
            }
        </>
    }
})
