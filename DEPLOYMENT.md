# Click2Have Online Deployment

This project is a static H5 demo. It does not need a backend, database, build step, or paid server.

## Recommended Deployment

Use Vercel.

## Steps

1. Create a GitHub repository, for example `click2have`.
2. Upload or push this project folder to the repository.
3. Open Vercel and choose `Add New Project`.
4. Import the GitHub repository.
5. Keep the default settings.
6. Deploy.
7. After deployment, open Project Settings > Domains.
8. Add:
   - `click2have.com`
   - `www.click2have.com`
9. Update your domain DNS records based on Vercel's instructions.

## Expected DNS

Vercel usually asks for:

- Root domain `click2have.com`: `A` record pointing to Vercel.
- `www.click2have.com`: `CNAME` pointing to Vercel.

Use the exact values shown in Vercel because they can vary by project.

## Demo URLs

After deployment, you should have:

- Temporary Vercel URL, such as `https://click2have.vercel.app`
- Production domain: `https://click2have.com`
- Optional www domain: `https://www.click2have.com`

## Notes

- This version stores cart, order, and wallet data in each visitor's browser.
- No real payment occurs.
- No server cost is required for this demo version.

