<template>
    <div class="faq_block md:px-[10px] px-5 pt-20" id="faq">
        <div class="card py-14 md:px-10">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
            <AccordionTab header="Header IIII">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
            <AccordionTab header="Header IIIII">
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
    </div>
</template>

<script setup>

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

</script>

<style lang="scss" scoped>
.faq_block{
    background: rgb(17, 64, 113);
}

:deep .p-accordion{
background: rgb(17, 64, 113);
}

// :deep .p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link{
//     background: rgb(47, 135, 230) !important;
//     color: white;
//     margin-top: 2px;
// }

:deep .p-accordion .p-accordion-content {
    padding: 0.75rem 1.25rem;
    border: 0 none;
    background: rgba(80, 44, 211, 0) !important;
    color: white;
}

:deep .p-accordion-header{
margin-top: 14px;
}

:deep .p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {
    background: linear-gradient(90deg,#3477b0,rgba(30,83,130,0));
   color: white;
   border-radius: 12px;
}

:deep .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header .p-accordion-header-link {
    background: linear-gradient(90deg,#3477b0,rgba(30,83,130,0));
color: white;
border-radius: 12px;
}
</style>