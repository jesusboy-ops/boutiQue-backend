# Vercel Deployment Guide

## Issues Fixed

1. **MongoDB Connection Caching** - Serverless functions reuse connections
2. **Removed process.exit()** - This crashes serverless functions
3. **Connection Middleware** - Ensures DB is connected before handling requests
4. **Buffer Commands** - Disabled for better serverless performance

## Environment Variables Required

Add these in your Vercel Dashboard (Settings → Environment Variables):

```
MONGO_URI=mongodb+srv://israelloko65_db_user:vxVfGpqMPaYqmN85@boutiquecluster.ehdgreq.mongodb.net/clothing-boutique?appName=BoutiqueCluster
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
CLOUDINARY_CLOUD_NAME=Root
CLOUDINARY_API_KEY=156893194363591
CLOUDINARY_API_SECRET=5KGCy6IK3Xlxhqia8THwUML3T_M
NODE_ENV=production
```

## Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix serverless deployment"
   git push
   ```

2. **Redeploy on Vercel**
   - Go to your Vercel dashboard
   - Click "Redeploy" or push will auto-deploy
   - Wait for build to complete

3. **Check Logs**
   - Go to Vercel Dashboard → Your Project → Deployments
   - Click on latest deployment
   - View "Function Logs" to debug any issues

## Testing After Deployment

Test the API:
```bash
curl https://your-project.vercel.app/api
```

Expected response:
```json
{
  "message": "Clothing Boutique API is running on Vercel"
}
```

## Common Issues

### 1. MongoDB Connection Timeout
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check Network Access in MongoDB Atlas

### 2. Environment Variables Not Set
- Verify all env vars are set in Vercel dashboard
- Redeploy after adding env vars

### 3. Function Timeout
- Vercel free tier has 10s timeout
- Optimize slow queries or upgrade plan

## MongoDB Atlas Network Access

1. Go to MongoDB Atlas Dashboard
2. Click "Network Access" in left sidebar
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Click "Confirm"

This allows Vercel's serverless functions to connect to your database.
