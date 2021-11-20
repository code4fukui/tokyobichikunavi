<template>
  <footer class="GlobalFooter">
    <div class="GlobalFooter__admin">
      <div>{{ $developper[$i18n.locale] }}</div>
      <div><a href=https://github.com/code4fukui/tokyobichikunavi>備蓄ナビ src on GitHub</a>, forked from <a href=https://www.bichiku.metro.tokyo.lg.jp/download/>東京備蓄ナビ オープンソース</a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
}
</script>
