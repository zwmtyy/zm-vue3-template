<template>
    <div class="h-full w-full flex justify-center items-center" style="width:100%;height:100%">
        <div class="full-wrapper">
            <div class="wrapper-welcome-box">
                <House />
                
                <div class="welcome-text">
                    欢迎来到语音直播平台
                </div>
            </div>
                <!-- <canvas id="space" width="1336" ref="space" height="937"></canvas>
            
                <div class="wrapper-welcome">
                    <i class="xz-dotdot"><b class="dotdot"></b></i>
                    <div></div>
                    <div class="c_trans">
                        <div></div>
                        <div style="position:relative;">
                            <div class="circle" ref="circle"  :style="circleStyle">
                                <ul ref="circleRef">
                                    <li @click="updateJudge(0)"><img src="./images/icon_turnplate_property.png" /></li>
                                    <li @click="updateJudge(1)"><img src="./images/icon_turnplate_alarm.png" /></li>
                                    <li @click="updateJudge(2)"><img src="./images/icon_turnplate_source.png" /></li>
                                    <li @click="updateJudge(3)"><img src="./images/icon_turnplate_planning.png" /></li>
                                    <li @click="updateJudge(4)"><img src="./images/icon_turnplate_complaints.png" /></li>
                                    <li @click="updateJudge(5)"><img src="./images/icon_turnplate_cover.png" /></li>
                                </ul>
                            </div>
                            <div class="work_con"></div>
                        </div>
                        <div></div>
                    </div>
                    <div></div>
                </div> -->
        </div>
    </div>
</template>
<style lang="less">
  i.xz-dotdot{
    width: 306px;
    height: 306px;
    position: absolute;  
    top: 50%;
    left:50%;
    margin-top:-153px;
    margin-left:-153px;
    display: block;
    /*旋转动画*/  
    animation:circleRoate 10s infinite linear ;
    transform-origin:center center;
  }
  .dotdot{  
         position: absolute;  
         left:-2px;  
         width: 10px;  
         height: 10px;  
         border-radius: 50%;  
         background:#999999;  
     }
      @keyframes circleRoate{  
        from{transform: rotate(0deg);}  
        to{transform: rotate(360deg);}  
    }  
</style>
<style lang="less" scoped>
@import "./animation.less";
.full-wrapper{
  position: relative;
  width:100%;
  height: 100%;
}
#space {
    width: 100%;
    height: 100%;
}
.welcome-text{
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    /* font-weight: 800; */
    color: rgb(50, 117, 226);
    /* text-shadow: 1px 1px 1px #000066; */
    text-indent: 8px;
    letter-spacing: 11px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin: 0 auto;
    width: 500px;
    box-sizing: content-box;
}
.wrapper-welcome-box{
    position:absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
}
.wrapper-welcome {
  position: relative;
    width: 480px;
    height: 480px;
    margin: 100px auto 0 auto;
    background: url(./images/bg_turnplate_radar_six.png) no-repeat 0 0;
}
.wrapper-welcome > div {
        display: block;
        width: 100%;
        height: 33%;
    }

.c_trans > div {
    display: block;
    width: 33%;
    height: 100%;
    float: left;
}
/*MAIN CIRCLE*/
.circle {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #FFFFFF;
    margin: 29px;
    display: block;
    opacity: 0.8;
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
}
    /*LITTLE CIRCLES*/
  .circle li {
      position: absolute;
      width: 80px;
      height: 80px;
      box-sizing: content-box;
      border-radius: 50%;
      background: #0087DB;
      list-style: none;
      text-align: center;
      font: 20px/50px Helvetica, Arial, sans-serif;
      border: 8px solid #A9D4F1;
  }

  .circle li:nth-child(1) {
      top: -140px;
      left: 2px;
  }

  .circle li:nth-child(2) {
      top: -68px;
      left: 125px;
      -webkit-transform: rotate(60deg);
      -moz-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
      -o-transform: rotate(60deg);
      transform: rotate(60deg);
  }

  .circle li:nth-child(3) {
      top: 72px;
      left: 125px;
      -webkit-transform: rotate(120deg);
      -moz-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
      -o-transform: rotate(120deg);
      transform: rotate(120deg);
  }

  .circle li:nth-child(4) {
      top: 144px;
      left: 2px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
  }

  .circle li:nth-child(5) {
      top: 72px;
      left: -121px;
      -webkit-transform: rotate(240deg);
      -moz-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
      -o-transform: rotate(240deg);
      transform: rotate(240deg);
  }

  .circle li:nth-child(6) {
      top: -68px;
      left: -121px;
      -webkit-transform: rotate(300deg);
      -moz-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
      -o-transform: rotate(300deg);
      transform: rotate(300deg);
  }
  
</style>
<script lang="ts">
import { defineComponent, onMounted, Ref } from "vue";
import House from "./components/hourse.vue";
export default defineComponent({
  name: "Welcome",
  components: { House },
  data () {
    return {
      circleStyle: {}
    }
  },
  methods: {
    updateJudge(deg: number){
      switch (deg) {
            case 0:
                break;
            case 1:
            case -5:
                this.updateAttr(-1);
                break;
            case -4:
            case 2:
                this.updateAttr(-2);
                break;
            case -3:
            case 3:
                this.updateAttr(3);
                break;
            case -2:
            case 4:
                this.updateAttr(2);
                break;
            case -1:
            case 5:
                this.updateAttr(1);
                break;
        }
    },
    updateAttr(n:number) {
      let cirCle:any = this.$refs.circle;
      console.log(this.$refs.circle);
      // return;
        var wt = cirCle.style['transform'];
        var reg = /(rotate\((([\-\+]?(\d+))(deg))\))/i
        var wts = wt.match(reg);
        var regExp:any = RegExp;
        var $2 = regExp.$3 * 1 + n * 60;
        this.circleStyle={transform: `rotate(${$2}deg)`};
    },
  },
  mounted(){
    let requestAnimFrame:any = (function() {
            return window.requestAnimationFrame
      })();
        var canvas:any = document.getElementById("space");
        var c = canvas.getContext("2d");
        var numStars =2000; //星星总数量
        var radius = '0.' + Math.floor(Math.random() * 9) + 1; 
        var focalLength = canvas.width * 2;
        var warp = 0;
        var centerX:any = 0, centerY:any = 0;

        var stars:any = [],
        star;
        var i;

        var animate = true;

        initializeStars();//初始化单颗星星

        function executeFrame() {

            if (animate)
                requestAnimFrame(executeFrame);
            moveStars();
            drawStars();
        }

        function initializeStars() {
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            stars = [];
            for (i = 0; i < numStars; i++) {
                star = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    o: '0.' + Math.floor(Math.random() * 99) + 1
                };
                stars.push(star);
            }
        }

        function moveStars() {
            for (i = 0; i < numStars; i++) {
                star = stars[i];
                star.z--;

                if (star.z <= 0) {
                    star.z = canvas.width;
                }
            }
        }

        function drawStars() {
            var pixelX, pixelY, pixelRadius;

            // 适应屏幕 永远都是全屏
            if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initializeStars();
            }
            if (warp == 0) {
                c.fillStyle = "rgba(230,230,250,1)"; //黑蓝色的夜空很美丽
                c.fillRect(0, 0, canvas.width, canvas.height);
            }


            //定义星星的颜色，从文创汇3原色中随机选一个

            // var wch_color,star_color,stars_color; 
            // wch_color = ["#ff6200","#5CBFE4","#5983B7"];
            // star_color = Math.floor((Math.random()*wch_color.length)); 
            // stars_colors = wch_color[star_color];

            c.fillStyle = "rgba(251, 251, 251, " + radius + ")";
            for (i = 0; i < numStars; i++) {
                star = stars[i];

                pixelX = (star.x - centerX) * (focalLength / star.z);
                pixelX += centerX;
                pixelY = (star.y - centerY) * (focalLength / star.z);
                pixelY += centerY;
                pixelRadius = 1 * (focalLength / star.z);

                c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
                c.fillStyle = "rgba(251, 251, 251, " + star.o + ")";
                //c.fill();
            }
        }
        executeFrame();
  }
});
</script>
