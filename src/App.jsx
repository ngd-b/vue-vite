import { ref, reactive, defineComponent, onMounted, computed } from 'vue'
import { mapState } from 'vuex'
import './App.less'
import { uesSystemStore } from '@/store/system.js'
import { Menu } from '@element-plus/icons-vue'

// 路由地址
import { routerMenus } from './routers'
// defineComponent  只返回传递给它的对象；
// 此处IDE支持
export default defineComponent({
  props: {},
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
    // 当前切换语言
    const lang = computed(() => systemStore.lang)
    // menuIsCollapse
    const menuIsCollapse = computed(() => systemStore.menuIsCollapse)

    return {
      count,
      user,
      systemStore,
      lang,
      menuIsCollapse,
    }
  },
  computed: {
    ...mapState({
      systemName: (state) => state.systemName,
    }),
  },
  methods: {
    handleAddCount() {
      this.count++
    },
    /**
     * 语言切换
     */
    transformLang(val) {
      this.$i18n.locale = val
      this.systemStore.transformLang(val)
    },
    /**
     * 按钮折叠
     */
    handleExpandMenu() {
      this.systemStore.menuIsCollapse = !this.menuIsCollapse
    },
  },
  render() {
    return (
      <>
        {this.systemStore.showAside ? (
          <el-container class="app-container">
            <el-header>
              <div class={['logo-name', this.menuIsCollapse ? 'collapse' : '']}>
                {!this.menuIsCollapse && <h1>{this.systemName}</h1>}
                <el-icon
                  size={40}
                  class="expandIcon"
                  onClick={this.handleExpandMenu}
                >
                  <Menu />
                </el-icon>
              </div>

              <div className="lang-transform">
                <el-switch
                  model-value={this.lang}
                  inline-prompt
                  size="large"
                  active-value="zh"
                  inactive-value="en"
                  active-text="中文"
                  inactive-text="英文"
                  onChange={this.transformLang}
                />
              </div>
            </el-header>
            <el-container>
              <el-aside width={this.menuIsCollapse ? '64px' : '200px'}>
                <el-menu
                  router
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  text-color="#fff"
                  collapse={this.menuIsCollapse}
                >
                  {routerMenus.map((item, index) => (
                    <el-menu-item key={index} index={item.path}>
                      <el-icon>
                        <item.meta.icon />
                      </el-icon>
                      <span>{this.$t(item.meta.title)}</span>
                    </el-menu-item>
                  ))}
                </el-menu>
              </el-aside>
              <el-main>
                <router-view></router-view>
                {/* <el-scrollbar>
                                <router-view></router-view>
                            </el-scrollbar> */}
                {/* <el-backtop bottom={50} right={50} visibility-height={80} /> */}
              </el-main>
            </el-container>
          </el-container>
        ) : (
          <el-container class="app-container">
            <router-view></router-view>
          </el-container>
        )}
      </>
    )
  },
})
