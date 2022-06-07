<template>
  <!-- <a :href="'#' + props.to"> -->
  <a :href="props.to" id="test">
    <slot />
  </a>
</template>

<script setup>
import { defineProps } from "vue";
let props = defineProps({
  to: { type: String, required: true },
});

var linkList = document.querySelectorAll("a[href]");
linkList.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    history.pushState(null, "", el.getAttribute("href"));
    routerView.innerHTML = location.pathname;
  })
);
</script>
