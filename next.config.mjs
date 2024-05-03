const cspHeader = `
    default-src 'self' api.myvizbl.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' accounts.google.com/gsi/client;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    img-src 'self' blob: data: api.producthunt.com;
    font-src * data: blob: 'unsafe-inline';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;