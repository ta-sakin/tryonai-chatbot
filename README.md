# TryOn AI - Nhost Edition

A virtual try-on AI chatbot/widget that can be embedded on any website, now powered by Nhost.

## Features

- 🤖 AI-powered virtual try-on using Google Gemini
- 🔐 Secure authentication with Nhost Auth
- 📊 Real-time analytics and usage tracking
- 🎨 Customizable widget themes and positioning
- 🔒 Domain-based security controls
- 📈 Usage limits and rate limiting
- 👨‍💼 Admin dashboard for user management

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Nhost (GraphQL + Functions)
- **Database**: PostgreSQL (managed by Nhost)
- **Authentication**: Nhost Auth
- **AI**: Google Gemini API
- **Styling**: Tailwind CSS + Radix UI

## Quick Start

### Prerequisites

- Node.js 18+
- Nhost CLI
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nhost-tryon-ai
```

2. Install dependencies:
```bash
npm install
```

3. Install Nhost CLI:
```bash
npm install -g @nhost/cli
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Start Nhost local development:
```bash
nhost dev
```

6. In another terminal, start the frontend:
```bash
npm run dev
```

### Production Deployment

1. Deploy to Nhost:
```bash
nhost deploy
```

2. Update your environment variables in the Nhost dashboard

3. Build and deploy your frontend to your preferred hosting service

## Widget Integration

To integrate the widget on any website, add this script tag:

```html
<script 
  src="https://your-domain.com/widget.js" 
  data-tryon-key="your-public-key"
></script>
```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── graphql/        # GraphQL operations
├── nhost/                  # Nhost configuration
│   ├── functions/          # Serverless functions
│   ├── migrations/         # Database migrations
│   └── nhost.toml         # Nhost configuration
├── public/                 # Static assets
│   └── widget.js          # Embeddable widget
└── package.json
```

## Key Differences from Express Version

### Authentication
- **Before**: Custom session-based auth with bcrypt
- **After**: Nhost Auth with JWT tokens

### Database
- **Before**: Direct PostgreSQL with Drizzle ORM
- **After**: GraphQL API with Hasura (managed by Nhost)

### API Layer
- **Before**: Express.js REST API
- **After**: Nhost Functions + GraphQL

### Deployment
- **Before**: Manual server deployment
- **After**: Serverless deployment with Nhost

## Environment Variables

### Frontend (.env)
```bash
VITE_NHOST_SUBDOMAIN=your-subdomain
VITE_NHOST_REGION=us-east-1
```

### Functions (Nhost Dashboard)
```bash
GEMINI_API_KEY=your-gemini-api-key
```

## Development

### Running Locally
```bash
# Start Nhost services
nhost dev

# Start frontend
npm run dev
```

### Database Migrations
```bash
# Migrations are automatically applied when using nhost dev
# For production, they're applied during deployment
```

### GraphQL Code Generation
```bash
npm run codegen
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details