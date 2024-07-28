<template>
    <div class="info-item">
        <div class="television">
            <div class="screen">

                委托填报检测
            </div>
            <div class="support">
                <div class="pillar"></div>
                <div class="pillar"></div>
            </div>
        </div>

        <div class="bar"></div>
        <div class="arrowbox">
            <div class="arrow-left"></div>
            <img src="@/assets/img/control-hand.svg" alt="">
            <div class="arrow-center">1</div>
            <div class="arrow-right"></div>
        </div>
        <div class="bar"></div>
        <div class="text-content">
            <div class="itembox" v-for="item in 2" :key="item">
                <div class="titleicon">及时委托</div>
                <div class="row">
                    <label>委托人姓名</label>
                    <div>张冲</div>
                </div>
                <div class="row">
                    <label>委托时间</label>
                    <div>2023年12月23日</div>
                </div>
                <div class="row">
                    <label>委托人姓名</label>
                    <div>张冲</div>
                </div>
                <div class="row">
                    <label>委托时间</label>
                    <div>2023年12月23日</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@control-bg: #0099FF;
@control-arrow: #fff;
@control-border: #8BCEFF;



.television{
    margin-left: 10px;
    color: #fff;
}

.screen{
    width: 160px;
    height: 100px;
    background: @control-bg;
    border-radius: 10px;
    border: 1px solid @control-border;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.support{
    height: 23px;
    width: 30px;
    margin: 0 auto;
    display: flex;
    position: relative;
    padding-bottom: 10px;
    &::after{
        content: '';
        display: block;
        width: 60px;
        height: 8px;
        border-radius: 4px;
        border: 1px solid @control-border;
        background: @control-bg;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
}

.pillar{
    width: 6px;
    height: 18px;
    background: @control-bg;
    margin: 0 4px;
    position: relative;
    top: -2px;
    z-index: 1;
    border-left: 1px solid @control-border;
    border-right: 1px solid @control-border;
}

.bar{
    background: @control-bg;
    height: 6px;
}

.arrowbox{
    display: flex;
    align-items: center;
    height: 30px;
    img{
        width: 60px;
        height: 20px;
        object-fit: contain;
        transform: translateX(4px);
    }
}

.arrow-left{
    height: 4px;
    flex: 1;
    background: @control-arrow;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 14px solid @control-arrow;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        margin-right: -6px;
    }
}

.arrow-right{
    height: 4px;
    flex: 1;
    background: @control-arrow;

}

.text-content{
    background: #3E56AC;
    margin: 0 10px;
    padding: 12px;
    border-radius: 4px;
    margin-top: 10px;
    color: #fff;
    border: 1px solid #4D66BD;
    min-width: 230px;
    line-height: 1.8;

    .itembox{
        margin-top: 10px;
        &:first-child{
            margin-top: 0;
        }
    }

    .titleicon{
        font-size: @font-size-title;
        position: relative;
        padding-left: 8px;
        &::before{
            content: '';
            display: block;
            height: 1em;
            width: 4px;
            border-radius: 2px;
            background: @active-color;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .row{
        display: flex;
        align-items: center;
        white-space: nowrap;
        label{
            color: @label-color;
            min-width: 6em;
            display: inline-block;
            text-align: right;
            &::after{content: '：';}
        }
    }
}
</style>