/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/gajila/terima-kasih',
        destination: 'https://gajila.my/lite/terima-kasih',
        permanent: true,
      },
      {
        source: '/gajila',
        destination: 'https://gajila.my/lite',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
