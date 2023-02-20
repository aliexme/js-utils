export default {
  '*.{js,mjs}': ['yarn lint:check'],
  '*.ts': ['yarn ts:check', 'yarn lint:check'],
}
