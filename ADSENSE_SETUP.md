# Google AdSense Setup Guide

## 🚀 Getting Started with Google AdSense

### 1. Create Google AdSense Account

1. Go to [Google AdSense](https://www.google.com/adsense)
2. Sign in with your Google account
3. Click "Get Started"
4. Fill in your website details and personal information
5. Submit for review (this can take 1-2 weeks)

### 2. Get Your Publisher ID

Once approved, you'll receive your publisher ID in this format: `ca-pub-XXXXXXXXXXXXXXXX`

### 3. Update Configuration

Replace the placeholder publisher ID in these files:

#### `index.html`
```html
<!-- Replace YOUR_PUBLISHER_ID with your actual publisher ID -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
 crossorigin="anonymous"></script>
```

#### `src/config/adsense.js`
```javascript
// Replace with your actual AdSense publisher ID
PUBLISHER_ID: 'ca-pub-YOUR_PUBLISHER_ID',
```

### 4. Create Ad Units

1. In your AdSense dashboard, go to "Ads" → "By ad unit"
2. Click "Create new ad unit"
3. Choose ad format (Display ads recommended)
4. Set ad size (Responsive recommended)
5. Copy the ad slot ID (format: `1234567890`)

### 5. Update Ad Slot IDs

Replace the placeholder ad slot IDs in `src/config/adsense.js`:

```javascript
AD_SLOTS: {
  BANNER_TOP: 'YOUR_ACTUAL_SLOT_ID_1',
  BANNER_BOTTOM: 'YOUR_ACTUAL_SLOT_ID_2',
  IN_ARTICLE: 'YOUR_ACTUAL_SLOT_ID_3',
  SIDEBAR_LEFT: 'YOUR_ACTUAL_SLOT_ID_4',
  SIDEBAR_RIGHT: 'YOUR_ACTUAL_SLOT_ID_5',
  SEARCH_RESULTS: 'YOUR_ACTUAL_SLOT_ID_6',
},
```

### 6. Test Your Ads

1. Deploy your app
2. Wait 24-48 hours for ads to start appearing
3. Check AdSense dashboard for impressions and earnings

## 📍 Ad Placements

### Current Ad Locations:

1. **Home Page (Index.jsx)**
   - Banner ad after search form
   - Banner ad after track list

2. **Lyrics Page (Lyrics.jsx)**
   - In-article ad after lyrics content

3. **Sidebar Ads (App.jsx)**
   - Left sidebar ad (sticky)
   - Right sidebar ad (sticky)

### Adding More Ads:

You can easily add more ads by importing the ad components:

```javascript
import AdBanner from "../ads/AdBanner";
import AdSidebar from "../ads/AdSidebar";
import AdInArticle from "../ads/AdInArticle";

// Then use them in your component:
<AdBanner adSlot={getAdSlot('BANNER_TOP')} />
```

## 🎨 Ad Styling

Ads are styled to match your app's design:
- Rounded corners
- Subtle shadows
- Responsive design
- Hover effects
- "Advertisement" label

## ⚠️ Important Notes

1. **Don't click your own ads** - This violates AdSense policies
2. **Wait for approval** - Don't expect immediate earnings
3. **Follow policies** - Ensure your content complies with AdSense policies
4. **Mobile optimization** - Ads are responsive and work on all devices

## 🔧 Troubleshooting

### Ads not showing?
- Check if your site is approved
- Verify publisher ID is correct
- Wait 24-48 hours for ads to appear
- Check browser console for errors

### Low earnings?
- Focus on quality content
- Optimize ad placement
- Increase site traffic
- Consider different ad formats

## 📊 Analytics

Monitor your performance in the AdSense dashboard:
- Page views
- Impressions
- Click-through rate (CTR)
- Revenue
- Ad performance by placement

## 🚫 Ad Blockers

Some users may have ad blockers enabled. This is normal and won't affect your AdSense account.

---

**Need help?** Check the [Google AdSense Help Center](https://support.google.com/adsense) for detailed guides and troubleshooting. 