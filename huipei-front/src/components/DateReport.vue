<template>
    <div style="width: 100%">
        <h3>数据报表</h3>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card style="width: 100%; height: 95%;">
                    <el-col :span="6">
                        <img style="width: 120%; margin-top: -22%;margin-left: -10%" src="../../static/pic4.jpg" />
                    </el-col>
                    <el-col :span="10">
                        <div style="width: 100%; text-align: center; margin-left: -15%">
                            <el-row :gutter="10">
                                <p style="margin-top: -10%">{{todayTotal1}}</p>
                            </el-row>
                            <el-row :gutter="10">
                                <p style="font-size: x-small; margin-top: -17%">今日预约量</p>
                            </el-row>
                        </div>
                    </el-col>
                        <el-col :span="8">
                            <img style="width: 120%; margin-top: -15%; margin-left: 20%" src="../../static/pic11.jpg" />
                        </el-col>

                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card style="width: 100%; height: 95%;">
                    <el-col :span="6">
                        <img style="width: 120%; margin-top: -22%;margin-left: -10%" src="../../static/pic2.jpg" />
                    </el-col>
                    <el-col :span="10">
                        <div style="width: 100%; text-align: center; margin-left: -15%">
                            <el-row :gutter="10">
                                <p style="margin-top: -10%">{{todayTotal2}}</p>
                            </el-row>
                            <el-row :gutter="10">
                                <p style="font-size: x-small; margin-top: -17%">今日报名量</p>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img style="width: 120%; margin-top: -15%; margin-left: 20%" src="../../static/pic12.jpg" />
                    </el-col>

                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card style="width: 100%; height: 95%;">
                    <el-col :span="6">
                        <img style="width: 120%; margin-top: -22%;margin-left: -10%" src="../../static/pic3.jpg" />
                    </el-col>
                    <el-col :span="10">
                        <div style="width: 100%; text-align: center; margin-left: -15%">
                            <el-row :gutter="10">
                                <p style="margin-top: -10%">{{todayTotal3}}</p>
                            </el-row>
                            <el-row :gutter="10">
                                <p style="font-size: x-small; margin-top: -17%">今日咨询量</p>
                            </el-row>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img style="width: 120%; margin-top: -15%; margin-left: 20%" src="../../static/pic13.jpg" />
                    </el-col>

                </el-card>
            </el-col>
        </el-row>

        <div style="margin-top: 20px"></div>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-card style="width: 100%; height: 100%;">
                    <div style="width: 100%; height: 30px;text-align: right">
                        <el-row :gutter="10">
                            <el-col :span="3">
                                <img style="width: 100%" src="../../static/chart_title1.jpg"/>
                            </el-col>
                            <el-col :span="18">
                                <el-select v-model="crossChart.dataType" class="m-2" size="small" style="width: 15%">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="crossChart" style="width: 90%; height:250px"></div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card style="width: 100%; height: 100%;">
                    <div style="width: 100%; height: 30px;text-align: right">
                        <el-row :gutter="10">
                            <el-col :span="7">
                                <img style="width: 100%" src="../../static/chart_title2.jpg"/>
                            </el-col>
                            <el-col :span="17">
                                <el-select v-model="dataType" class="m-2" size="small" style="width: 25%">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="drawChart" style="width: 90%; height:250px"></div>
                </el-card>
            </el-col>
        </el-row>
        <div style="margin-top: 20px"></div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card style="width: 100%; height: 100%;">
                    <div style="width: 100%; height: 30px;text-align: right">
                        <el-row :gutter="10">
                            <el-col :span="3">
                                <img style="width: 80%" src="../../static/chart_title3.jpg"/>
                            </el-col>
                            <el-col :span="18">
                                <el-select v-model="consultChart.dataType" class="m-2" size="small" style="width: 10%">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="consultChart" style="width: 90%; height:250px"></div>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    import * as echarts from 'echarts'
    export default {
        name: "DateReport",
        data(){
            return {
                todayTotal1:1233,
                todayTotal2:12533,
                todayTotal3:14233,
                seriesname: '',
                xdata: ['1月', '2月', '3月', '4月', '5月', '6月'],
                ydata: [5, 20, 36, 10, 10, 70],
                dataType:'day',
                crossChart:{
                    xdata:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    ydata:[140, 232, 101, 264, 90, 340, 250],
                    dataType:'day'
                },
                consultChart:{
                    xdata: ['1月', '2月', '3月', '4月', '5月', '6月'],
                    ydata: [5, 20, 36, 10, 10, 70],
                    dataType:'day'
                },
                options:[
                    {
                        label: "日",
                        value: "day"
                    },
                    {
                        label: "月",
                        value: "month"
                    },
                ]
            }
        },
        created(){

        },
        mounted(){
            this.drawChart();
            this.crossChartInit();
            this.drawConsultChart();
        },
        methods:{
            crossChartInit(){
                if (this.crossChart.ydata === []) {
                    echarts.init(document.getElementById('crossChart')).dispose() //无数据则清空图表内容
                } else {
                    let myChart = echarts.init(document.getElementById('crossChart'));
                    myChart.setOption({
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: this.crossChart.xdata
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                splitLine: {
                                    show: true,
                                    lineStyle:{
                                        type:'dashed'
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 3,
                                    color: '#2b7afc',
                                },
                                showSymbol: false,
                                areaStyle: {
                                    opacity: 0.5,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: '#2b7afc'
                                        },
                                        {
                                            offset: 1,
                                            color: '#eaf2ff'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: this.crossChart.ydata
                            }
                        ]
                    })
                }
            },
            drawChart() {
                if (this.ydata === []) {
                    echarts.init(document.getElementById('drawChart')).dispose() //无数据则清空图表内容
                } else {
                    // 基于准备好的dom，初始化echarts实例
                    let myChart = echarts.init(document.getElementById('drawChart'))
                    // 绘制图表
                    myChart.setOption({
                        // 不清楚，但是删掉的话，hover不能显示信息
                        tooltip: {},
                        // x 轴信息
                        xAxis: {
                            data: this.xdata
                        },
                        // y轴信息
                        yAxis: {
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:'dashed'
                                }
                            }
                        },
                        // hover 时激活的信息
                        series: [
                            {
                                name: this.seriesname,
                                // 设置柱状图的方式，是将 series 的 type 设为 'bar'
                                type: 'bar',
                                data: this.ydata,
                                showBackground: false,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [


                                        { offset: 0, color: '#5783fe' },
                                        { offset: 0.5, color: '#a1baff' },
                                        { offset: 1, color: '#cad8ff' },
                                    ])
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            { offset: 0, color: '#5783fe' },
                                            { offset: 0.7, color: '#a1baff' },
                                            { offset: 1, color: '#cad8ff' },
                                        ])
                                    }
                                },
                            }
                        ]
                    })
                }
            },

            drawConsultChart() {
                if (this.ydata === []) {
                    echarts.init(document.getElementById('consultChart')).dispose() //无数据则清空图表内容
                } else {
                    // 基于准备好的dom，初始化echarts实例
                    let myChart = echarts.init(document.getElementById('consultChart'));
                    // 绘制图表
                    myChart.setOption({
                        // 不清楚，但是删掉的话，hover不能显示信息
                        tooltip: {},
                        // x 轴信息
                        xAxis: {
                            data: this.consultChart.xdata
                        },
                        // y轴信息
                        yAxis: {
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:'dashed'
                                }
                            }
                        },
                        // hover 时激活的信息
                        series: [
                            {
                                name: this.seriesname,
                                // 设置柱状图的方式，是将 series 的 type 设为 'bar'
                                type: 'bar',
                                data: this.consultChart.ydata,
                                showBackground: false,
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#5783fe' },
                                        { offset: 0.5, color: '#a1baff' },
                                        { offset: 1, color: '#cad8ff' },
                                    ])
                                },
                                emphasis: {
                                    itemStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            { offset: 0, color: '#5783fe' },
                                            { offset: 0.7, color: '#a1baff' },
                                            { offset: 1, color: '#cad8ff' },
                                        ])
                                    }
                                },
                            }
                        ]
                    })
                }
            },
        }
    }
</script>

<style scoped>

</style>