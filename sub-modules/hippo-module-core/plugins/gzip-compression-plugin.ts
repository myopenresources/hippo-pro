import viteCompression from 'vite-plugin-compression'

export function gzipCompressionPlugin(opt: any = {}) {
  const options = {
    verbose: true,
    disable: false,
    threshold: 24000,
    algorithm: 'gzip',
    ext: '.gz',
    deleteOriginFile: false,
    ...opt
  }
  return viteCompression(options)
}
