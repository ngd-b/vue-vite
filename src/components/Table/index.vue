<template>
    <div class="hb-table">
        <header class="table-tools">
            <slot name="header" />
        </header>
        <main class="table-list">
            <el-table v-loading="loading" :data="tableOptions.data">
                <!-- 可展开 -->
                <template v-if="tableOptions.expand">
                    <el-table-column type="expand" :fixed="true" width="50px">
                        <template #default="scope">
                            <render-column
                                :render="tableOptions.renderExpandTable"
                                :scope="scope"
                            />
                        </template>
                    </el-table-column>
                </template>
                <template v-for="item in tableOptions.columns">
                    <!-- checkbox -->
                    <el-table-column
                        v-if="item.type === 'selection'"
                        :key="item.prop || 'selection'"
                        :align="item.align || 'center'"
                        type="selection"
                        v-bind="item"
                    />
                    <!-- 表头嵌套：无限嵌套 -->
                    <nested-column
                        v-else-if="item.nested"
                        :key="item.prop"
                        :data="item"
                    />
                    <el-table-column
                        v-else
                        :key="item.prop"
                        :prop="item.prop"
                        :label="item.label"
                        :align="item.align || 'center'"
                        v-bind="item"
                    >
                        <template #default="scope">
                            <render-column
                                v-if="item.render"
                                :render="item.render"
                                :scope="scope"
                            />
                            <span v-else>{{
                                scope.row[item.prop] || '-'
                            }}</span>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </main>
        <footer v-if="showPagination" class="table-pagination">
            <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageOptions.total"
                :current-page="pageOptions.page"
                :page-size="pageOptions.size"
                @size-change="handleChange($event, 'size')"
                @current-change="handleChange($event, 'page')"
            />
        </footer>
    </div>
</template>
<script>
import RenderColumn from './renderColumn.vue'
//
import NestedColumn from './nestedColumn.vue'

export default {
    name: 'HbTable',
    components: {
        RenderColumn,
        NestedColumn,
    },
    inheritAttrs: false,
    props: {
        tableOptions: {
            type: Object,
            default: () => ({
                data: [],
                columns: [],
            }),
        },
        pageOptions: {
            type: Object,
            default: () => {},
        },
        showPagination: {
            type: Boolean,
            default: true,
        },
        loading: Boolean,
    },
    emits: ['change'],
    data() {
        return {}
    },
    methods: {
        handleChange(val, attr) {
            // 分页、页码
            this.$emit('change', { [attr]: val })
        },
    },
}
</script>
<style lang="less" scoped>
.hb-table {
    footer {
        margin-top: 15px;
        text-align: center;
        .el-pagination {
            justify-content: center;
        }
    }
}
</style>