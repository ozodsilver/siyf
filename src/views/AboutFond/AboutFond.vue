
<template>
    <div class="aboutfond">
        <div class=" pt-6 bg-transparent ">
            <TabView>
            <TabPanel>
                <template #header>
<div class="flex items-center gap-2">
    <img src="../../assets/images/pngwing.com.png" class="w-[50px] h-[50px]" alt="">
<span>Fond haqida</span>

</div>
                </template>

                <template #default>
                    <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </template>
               
            </TabPanel>
            <TabPanel>
                <template #header>
<div class="flex items-center gap-2">
    <img src="../../assets/images/pngwing.com.png" class="w-[50px] h-[50px]" alt="">
<span>Maqsad va vazifalar</span>

</div>
                </template>

                <template #default>
                    <p class="m-0">
                  ssdds.
                </p>
                </template>
               
            </TabPanel>
            <TabPanel>
                <template #header>
<div class="flex items-center gap-2">
    <img src="../../assets/images/pngwing.com.png" class="w-[50px] h-[50px]" alt="">
<span>Rahbariyat</span>

</div>
                </template>

                <template #default>
                    <p class="m-0">
                  ssdds.
                </p>
                </template>
               
            </TabPanel>
           
        </TabView>
    </div>
    </div>
   
</template>

<script setup>

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';


</script>
    


<style lang="scss" scoped>
:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link:focus {
    background-color: transparent;
}


.aboutfond {
    position: relative;
&:before{
    content: '';
    width: 100%;
    height: 400px;
    background: rgb(17,64,113);
background: linear-gradient(0deg, rgba(17,64,113,1) 11% , rgba(92, 170, 247, 0) 100%);
position: absolute;
top: -400px;
z-index: 444;

}

}

:deep .p-tabview .p-tabview-nav {
    background: transparent;
   padding: 0 10px;
   justify-content: center  ;
}

:deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {
   color: white;
    background: transparent;
    padding: 19px 16px;
}

:deep .p-tabview .p-tabview-nav .p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: white;
    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
:deep .p-tabview .p-tabview-panels {
    background: transparent !important;
    padding: 0px !important;
}

.aboutfond{
    background: rgb(17,64,113);
background: linear-gradient(0deg, rgba(17,64,113,1) 100%, rgba(52,141,230,0.9472163865546218) 100%);
}
</style>