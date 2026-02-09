# Claude Desktop AI Content Agent - User Manual

**Version:** 1.0  
**Last Updated:** February 8, 2026  
**Company:** Code Crafted Digital  
**Owner:** Andrew

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [What This System Does](#what-this-system-does)
3. [Setup & Configuration](#setup--configuration)
4. [How to Use](#how-to-use)
5. [Command Reference](#command-reference)
6. [Workflows & Examples](#workflows--examples)
7. [Quality Standards](#quality-standards)
8. [Troubleshooting](#troubleshooting)
9. [Best Practices](#best-practices)
10. [FAQ](#faq)

---

## 🎯 Overview

### What Is This?

This is an **autonomous AI content generation system** powered by Claude Desktop that creates professional, SEO-optimized content for Code Crafted Digital at scale.

### Key Features

- ✅ **Autonomous Execution** - Give simple commands, get complete results
- ✅ **Self-Learning** - Analyzes existing content to match quality
- ✅ **Consistent Quality** - Every page matches professional standards
- ✅ **E-E-A-T Compliant** - All 4 Google ranking signals built-in
- ✅ **Scale Ready** - Create 50+ pages in one command
- ✅ **Zero Training Needed** - Just give high-level instructions

### System Components

```
CONTENT_STRATEGY.md (GitHub)
↓ [Rules, templates, quality standards]
↓
Claude Desktop
↓ [Reads rules, creates content]
↓
Sanity CMS
↓ [Content storage]
↓
Next.js Website
↓ [Live pages]
↓
Vercel
  [Auto-deployment]
```

---

## 🚀 What This System Does

### Automated Content Creation

**Service Pillar Pages:**
- Creates complete service landing pages
- Optimizes for `/solutions` grid display
- Includes compelling CTAs and E-E-A-T signals
- Example: "SEO Services Michigan"

**City Pages (51 Michigan Cities):**
- Generates location-specific service pages
- 2,500-3,000 words per page
- Customized to each city's industries and characteristics
- Example: "SEO Services Detroit MI"

**Blog Posts:**
- Monthly content calendars (20 posts/month)
- Seasonal + evergreen + Michigan-focused topics
- SEO optimized with internal linking
- Automatic scheduling

**Competitive Intelligence:**
- Monitors competitor websites
- Tracks new content and changes
- Provides strategic recommendations
- Identifies opportunities

**Content Refresh:**
- Updates old pages with fresh content
- Adds new E-E-A-T signals (reviews, stats)
- Improves internal linking
- Maintains relevance

---

## ⚙️ Setup & Configuration

### Prerequisites

✅ GitHub account with repo access  
✅ Claude Desktop installed  
✅ Sanity CMS access  
✅ GitHub Personal Access Token

### Step 1: Add Master File to GitHub

```bash
# Navigate to your repo
cd /path/to/codecrafteddigital

# Add the strategy file
git add CONTENT_STRATEGY.md
git commit -m "Add AI content agent master strategy"
git push
```

### Step 2: Get GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name: "Claude Desktop Access"
4. Scopes: ✅ `repo` (full control)
5. Click **"Generate token"**
6. **Copy the token** (save it somewhere safe!)

### Step 3: Configure Claude Desktop

**Mac:**
```bash
# Edit config file
nano ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

**Add this configuration:**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "paste_your_token_here"
      }
    }
  }
}
```

### Step 4: Restart Claude Desktop

Quit completely and reopen.

### Step 5: Test It

Open Claude Desktop and say:
```
"Read CONTENT_STRATEGY.md"
```

If successful, Claude will confirm it understands your business.

---

## 💬 How to Use

### Basic Workflow

**The Simple Version:**

1. **Tell Claude Desktop what you want** (one simple sentence)
2. **Wait while it works** (20-30 minutes for big tasks)
3. **Review the results** (Claude reports what it created)
4. **Commit to GitHub** (`git add . && git commit && git push`)
5. **Vercel auto-deploys** (3-5 minutes later, live!)

**That's it!** 🎉

---

### Communication Style

**Talk naturally - Claude understands intent:**

✅ **Good commands:**
```
"Add web development"
"Create SEO cities"
"I need content"
"Check competitors"
```

❌ **Don't overthink it:**
```
"Can you please read the strategy file first, then analyze 
existing pages, ensure E-E-A-T compliance, and create SEO 
city pages following all documented guidelines..."
```

**Claude Desktop does ALL of that automatically!**

---

## 📖 Command Reference

### Service Management

#### Add New Service
```
"Add [service name]"
"Create [service name]"
"Launch [service name]"
```

**Examples:**
```
"Add web development"
"Create e-commerce service"
"Launch digital marketing"
```

**What happens:**
- ✅ Creates pillar page (solution)
- ✅ Plans 51-city rollout
- ✅ Generates 5 launch blog posts
- ✅ Updates master strategy file
- ✅ Reports completion

---

#### Full Service Rollout
```
"Full rollout: [service name]"
"Complete launch: [service name]"
```

**Examples:**
```
"Full rollout: web development"
"Complete launch: e-commerce"
```

**What happens:**
- ✅ Creates pillar page
- ✅ Creates all 51 city pages
- ✅ Creates 8 blog posts
- ✅ Updates internal linking across 100+ pages
- ✅ Total: 60 new pages in one command!

**Time:** ~30-40 minutes for complete rollout

---

### City Page Generation

#### Create All Cities
```
"Create all [service] cities"
"Generate [service] city pages"
```

**Examples:**
```
"Create all SEO cities"
"Generate web development city pages"
```

**What happens:**
- ✅ Queries Sanity for existing pages
- ✅ Identifies missing cities (out of 51 total)
- ✅ Learns from 3-5 best existing pages
- ✅ Creates all missing city pages
- ✅ Each page: 2,500-3,000 words
- ✅ All 4 E-E-A-T signals included
- ✅ City-specific customization

**Time:** ~30 minutes for 51 cities

---

#### Create Specific Number
```
"Create [X] [service] cities"
"Add [X] more [service] pages"
```

**Examples:**
```
"Create 10 SEO cities"
"Add 20 more web development pages"
```

**What happens:**
- ✅ Creates first X cities from tier-1 list
- ✅ Or adds X more to existing coverage
- ✅ Same quality as full rollout

**Time:** ~6 minutes per 10 cities

---

### Content Generation

#### Monthly Blog Content
```
"I need content"
"Content for [month]"
"Need [X] blog posts"
```

**Examples:**
```
"I need content"
"Content for March"
"Need 20 blog posts"
```

**What happens:**
- ✅ Generates 20 blog posts (default)
- ✅ Mix of seasonal, evergreen, Michigan-focused
- ✅ Publication calendar (5 posts/week)
- ✅ SEO optimized with internal links
- ✅ All created in Sanity

**Time:** ~15 minutes for 20 posts

---

### Competitive Intelligence

#### Competitor Analysis
```
"Check competitors"
"Competitor analysis"
"What's the competition doing?"
"Monitor [competitor name]"
```

**Examples:**
```
"Check competitors"
"Monitor Detroit Internet Marketing"
```

**What happens:**
- ✅ Scrapes competitor sitemaps
- ✅ Counts total pages
- ✅ Identifies new content
- ✅ Analyzes changes since last check
- ✅ Provides strategic recommendations
- ✅ Highlights threats and opportunities

**Time:** ~2 minutes

---

### Content Maintenance

#### Refresh Old Content
```
"Refresh content"
"Update old pages"
"Refresh oldest [X] pages"
```

**Examples:**
```
"Refresh content"
"Update oldest 10 pages"
```

**What happens:**
- ✅ Queries Sanity for oldest pages
- ✅ Updates year references (2025 → 2026)
- ✅ Adds new E-E-A-T signals (review count, etc.)
- ✅ Improves internal linking
- ✅ Maintains uniqueness between cities

**Time:** ~5 minutes for 10 pages

---

## 🎬 Workflows & Examples

### Workflow 1: Weekend Project - Add New Service

**Friday Evening:**
```
You: "Full rollout: web development"

Claude Desktop: [Works for 30 minutes]
✅ 1 pillar page created
✅ 51 city pages created
✅ 8 blog posts created
✅ 102 pages updated with links
✅ Total: 60 new pages

You:
git add .
git commit -m "Complete Web Development rollout"
git push

Vercel: [Auto-deploys in 5 minutes]

Result: 60 new pages live!
```

**Saturday - Verify:**
- Check /solutions page (new service appears)
- Check /sitemap.xml (60 new URLs)
- Spot-check 3-5 city pages for quality

**Time invested:** 5 minutes of your time, 30 minutes of AI work

---

### Workflow 2: Monthly Content Creation

**First Monday of Month:**
```
You: "Content for March"

Claude Desktop: [Works for 15 minutes]
✅ 20 blog posts created
✅ Publication calendar:
   Week 1 (Mar 3-7): 5 posts
   Week 2 (Mar 10-14): 5 posts
   Week 3 (Mar 17-21): 5 posts
   Week 4 (Mar 24-28): 5 posts

You:
git add .
git commit -m "March blog content - 20 posts"
git push

Result: Full month of content ready!
```

**Throughout Month:**
- Posts go live according to schedule
- Drive traffic to city pages
- Build topical authority

**Time invested:** 2 minutes of your time, 15 minutes of AI work

---

### Workflow 3: Competitive Response

**Competitor adds 5 new cities - You respond:**

```
You: "Check competitors"

Claude Desktop:
⚠️ Threat: Detroit Internet Marketing added 5 cities
📊 Recommendation: Add 10 more cities to widen gap

You: "Create 10 more SEO cities"

Claude Desktop: [Works for 10 minutes]
✅ 10 new city pages created

You:
git commit -m "Competitive response - 10 new cities"
git push

Result: 2x their expansion, maintain dominance!
```

**Time invested:** 5 minutes of your time, 10 minutes of AI work

---

### Workflow 4: Quarterly Refresh

**Every 3 Months:**
```
You: "Refresh oldest 10 pages"

Claude Desktop:
✅ Updated 10 pages:
   - Year references: 2025 → 2026
   - Review count: 41 → 45 reviews
   - New project examples added
   - Internal links improved

You: "Refresh oldest 10 pages" [Repeat 5x for 50 total]

Claude Desktop:
✅ All 50 pages refreshed

You:
git commit -m "Q1 content refresh - 50 pages updated"
git push

Result: Content stays fresh, rankings maintained!
```

**Time invested:** 15 minutes of your time over 3 months

---

## ✅ Quality Standards

### Every Page Includes

**E-E-A-T Signals (All 4 Required):**
1. **Experience** - "10+ years serving Michigan", "150+ projects"
2. **Expertise** - "Google Analytics certified", "Next.js specialists"
3. **Authoritativeness** - "41 five-star reviews", "Rated #1"
4. **Trustworthiness** - "Transparent pricing", "You own everything"

**Content Requirements:**
- ✅ 2,500-3,000 words (city pages)
- ✅ 1,500-2,000 words (blog posts)
- ✅ City mentioned 40-50 times
- ✅ Primary keyword 40-50 times
- ✅ Proper heading hierarchy (H1→H2→H3)
- ✅ 10 FAQs (city pages)
- ✅ Internal links to related pages
- ✅ Meta title <60 characters
- ✅ Meta description <160 characters

**Uniqueness:**
- ✅ 60-80% unique content per city
- ✅ Not copy/paste between cities
- ✅ City-specific details (zip codes, industries, landmarks)

---

### Self-Learning Quality Control

**Before creating new content, Claude Desktop:**

1. **Queries Sanity** for existing pages of same type
2. **Analyzes 3-5 best examples** to learn:
   - Exact content structure
   - Tone and voice patterns
   - E-E-A-T signal placement
   - CTA formatting
   - Internal linking approach
3. **Matches that quality** in all new pages
4. **Ensures consistency** across all content

**This means:** Every new page automatically matches the quality of your best existing pages!

---

## 🔧 Troubleshooting

### Issue: Claude Desktop doesn't seem to read the file

**Solution:**
```bash
# Verify GitHub MCP is configured
cat ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Should show github config with your token
# If not, add it and restart Claude Desktop
```

---

### Issue: Pages created with wrong format

**Solution:**
```
# Claude learns from existing pages
# If existing pages have issues, fix them first:

1. Fix 3-5 "best" pages manually in Sanity
2. Then tell Claude: "Create new pages"
3. Claude will learn from the fixed pages
4. New pages will match correct format
```

---

### Issue: Content seems generic/not city-specific

**Check CONTENT_STRATEGY.md:**
```markdown
# Ensure this section has city research requirements:
- Zip codes
- Primary industries
- Economic classification
- Nearby cities
- Unique characteristics
```

Then tell Claude: "Recreate [city] page with more city-specific details"

---

### Issue: E-E-A-T signals missing

**This shouldn't happen!** But if it does:

```
You: "Check if [page name] has all 4 E-E-A-T signals"

Claude Desktop: [Analyzes page]
Missing: Authoritativeness signal

You: "Update that page to include all E-E-A-T signals"

Claude Desktop: [Fixes it]
✅ All 4 E-E-A-T signals now present
```

---

### Issue: Vercel deployment failed

**Not a Claude issue - check Vercel:**
```bash
# Locally verify build works
npm run build

# If build succeeds locally, check Vercel logs
# Usually: environment variables or dependency issues
```

---

## 💡 Best Practices

### 1. Start Fresh Conversations

**Why:** Claude Desktop re-reads CONTENT_STRATEGY.md at start of each conversation

**Do this:**
```
[Open new Claude Desktop chat]
"Create all SEO cities"
```

**Not this:**
```
[Use same chat for weeks]
[File might be outdated in memory]
```

---

### 2. Commit Regularly

**After each major task:**
```bash
git add .
git commit -m "Add 51 SEO city pages"
git push
```

**Benefits:**
- Version history
- Easy rollback if needed
- Clear change tracking

---

### 3. Spot-Check Quality

**After bulk creation, verify 3-5 pages:**
- ✅ Content makes sense
- ✅ City details are accurate
- ✅ E-E-A-T signals present
- ✅ CTAs formatted correctly
- ✅ Internal links work

**If 3-5 are good, all 51 are good!** (Claude maintains consistency)

---

### 4. Update Master File as Business Evolves

**When to update CONTENT_STRATEGY.md:**
- Review count increases (41 → 45 → 50)
- New certifications earned
- New awards received
- Pricing changes
- New services offered
- Team grows

**Then:**
```bash
git add CONTENT_STRATEGY.md
git commit -m "Update review count to 45"
git push
```

Next time Claude creates content, it uses updated info!

---

### 5. Monitor Competitors Monthly

**First Monday of each month:**
```
You: "Check competitors"

Claude Desktop: [Provides update]

You: [Respond strategically if needed]
```

**Stay ahead of competition!**

---

### 6. Refresh Content Quarterly

**Every 3 months:**
```
"Refresh oldest 50 pages"
```

**Keeps content fresh for Google!**

---

### 7. Use Descriptive Commit Messages

**Good:**
```bash
git commit -m "Add 51 SEO Services city pages - targeting all tier-1 cities"
git commit -m "Q1 2026 content refresh - updated 50 pages with new stats"
git commit -m "Competitive response - added 10 cities to counter DIM expansion"
```

**Bad:**
```bash
git commit -m "updates"
git commit -m "new stuff"
git commit -m "changes"
```

**Why:** You'll thank yourself later when reviewing history!

---

## ❓ FAQ

### Q: How long does it take to create 51 city pages?

**A:** ~30 minutes of AI work. You just give the command, walk away, come back to 51 finished pages.

---

### Q: Do I need to review every page before publishing?

**A:** No! Claude's self-learning ensures consistency. Spot-check 3-5 pages. If they're good, all are good.

---

### Q: What if I want to change the content structure?

**A:** 
1. Manually update 3-5 "example" pages in Sanity
2. Update CONTENT_STRATEGY.md template
3. Next time Claude creates pages, it learns new structure
4. Can also run "Refresh content" to update old pages

---

### Q: Can I create pages for cities outside Michigan?

**A:**
Yes! Update CONTENT_STRATEGY.md:
```markdown
**Tier 4 - Ohio Expansion (10):**
Columbus, Cleveland, Cincinnati, Toledo, Akron, 
Dayton, Youngstown, Canton, Lorain, Hamilton
```

Then: `git push` and tell Claude to create them!

---

### Q: What if competitors copy our strategy?

**A:** 
Your advantages:
- ✅ Head start (6+ months)
- ✅ Domain authority already built
- ✅ Faster execution (they need to build this system)
- ✅ Better content (your AI is trained on your voice)
- ✅ Technical superiority (Next.js vs their WordPress)

**By the time they catch up, you're 200 pages ahead!**

---

### Q: How much does this cost to run?

**A:**
- GitHub: Free (for private repos <2GB)
- Claude Desktop: Included with Claude Pro ($20/month)
- Sanity: Free tier (then $99/month if you exceed it)
- Vercel: Free tier (likely sufficient)

**Total: ~$20-120/month to generate unlimited content worth $50,000+/month if outsourced!**

---

### Q: Can I use this for other businesses?

**A:**
Yes! Just:
1. Fork CONTENT_STRATEGY.md
2. Update company details, E-E-A-T signals, services
3. Update city lists for your market
4. Connect to your Sanity project
5. Works the same way!

---

### Q: What happens if I accidentally create duplicate pages?

**A:**
Claude checks first! Won't create duplicates.

If you manually create duplicates:
1. Delete in Sanity
2. Claude won't recreate (checks existing)

---

### Q: How do I know what cities have been created?

**A:**
```
You: "What SEO cities exist already?"

Claude Desktop:
[Queries Sanity]
✅ 51 SEO Services cities exist:
   [Lists all 51]
   
Missing: None
```

---

### Q: Can I customize individual pages after creation?

**A:**
Yes! Edit directly in Sanity. Claude won't overwrite manual edits.

**But:** If you run "Refresh content", it may update the page. To prevent:
1. Add note in Sanity: "Custom - don't auto-refresh"
2. Or: Update CONTENT_STRATEGY.md to exclude specific pages

---

### Q: What's the SEO timeline to see results?

**A:**
- **Week 1-2:** Pages indexed by Google
- **Week 3-4:** Initial impressions (500-1,000)
- **Week 5-8:** Rankings appear (positions 15-30)
- **Week 9-12:** Breakthrough (positions 5-15), first leads
- **Month 4-6:** Explosion (top 3 rankings), steady leads
- **Month 7-12:** Domination (#1 rankings), crushing competitors

**Conservative estimate: 3-6 months to dominate local search**

---

## 🎯 Quick Start Checklist

**Setup (One-time):**
- [ ] Add CONTENT_STRATEGY.md to GitHub
- [ ] Get GitHub Personal Access Token
- [ ] Configure Claude Desktop with token
- [ ] Restart Claude Desktop
- [ ] Test: "Read CONTENT_STRATEGY.md"

**First Use:**
- [ ] "Create all SEO cities"
- [ ] Wait 30 minutes
- [ ] Review 3-5 pages in Sanity
- [ ] Commit: `git add . && git commit && git push`
- [ ] Verify deployment on Vercel
- [ ] Check /sitemap.xml for new pages

**Ongoing:**
- [ ] Monthly: "I need content" (blog posts)
- [ ] Monthly: "Check competitors"
- [ ] Quarterly: "Refresh oldest 50 pages"
- [ ] As needed: "Add [new service]"

---

## 🚀 You're Ready!

**You now have:**
- ✅ Autonomous content generation at scale
- ✅ Self-learning quality control
- ✅ Consistent E-E-A-T compliance
- ✅ Competitive intelligence monitoring
- ✅ Zero ongoing maintenance

**Just give simple commands and watch Michigan SEO domination happen!**

---

## 📞 Support

**Issues with:**
- **This system:** Update CONTENT_STRATEGY.md, restart Claude Desktop
- **Sanity:** Check Sanity documentation
- **Deployment:** Check Vercel logs
- **Content quality:** Update example pages, Claude will learn

**Remember:** Claude Desktop learns from your existing content. Quality in = Quality out!

---

## 🎉 Happy Content Creating!

**You're now equipped to:**
- Generate 50+ pages in 30 minutes
- Create month's worth of content in 15 minutes
- Monitor and outpace competitors automatically
- Dominate Michigan local search at scale

**Now go take over Michigan! 💪🔥👑**

---

*Last updated: February 8, 2026*  
*System version: 1.0*  
*Questions? Check CONTENT_STRATEGY.md for detailed automation rules*
