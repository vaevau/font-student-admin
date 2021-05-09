<template>
  <div class="user-info">
    <div class="user-avatar">
      <router-link to="/profile"><img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"></router-link>
    </div>

    <div class="user-state">
      <h6>{{name}}</h6>
      <p>
        <span class="state-ico"><svg t="1620280936973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1152" width="24" height="24"><path d="M692.071703 329.86173c-48.372707-48.387034-112.705921-75.023694-181.146687-75.023694-68.440765 0-132.747373 26.63666-181.148733 75.023694-48.400337 48.374754-75.022671 112.707968-75.022671 181.123151s26.623357 132.74635 75.022671 181.146687c48.374754 48.402383 112.707968 75.023694 181.148733 75.023694 68.441788 0 132.745327-26.647917 181.146687-75.023694 48.427966-48.373731 75.024717-112.706945 75.024717-181.146687C767.096421 442.544115 740.447481 378.237507 692.071703 329.86173z" p-id="1153" fill="#18BC9C" /></svg></span>
        <span class="state-text">在线</span>
      </p>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters([
      'avatar',
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
    .user-info {
        width: 200px;
        margin: 20px auto;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        display: flex;
        h6 {
          color: #fff;
        }
        p{
          margin-top: -4px;
        }
        .state-ico svg {
            position: relative;
            top: 7px;
        }
        .state-text {
            font-size: 12px;
            
        }
        .user-avatar {
            width: 46px;
            height: 46px;
            a{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
       .user-state {
           margin-left: 10px;
       }
    }
</style>
