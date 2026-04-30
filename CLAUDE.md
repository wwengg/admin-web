# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Environment Setup
```bash
# Install dependencies
pnpm install

# Start development server (runs on http://localhost:9527)
pnpm run dev

# Run tests
pnpm run test:unit

# Run tests and linting (CI pipeline)
pnpm run test:ci
```

### Building
```bash
# Build for staging environment
pnpm run build:stage

# Build for production
pnpm run build:prod

# Preview production build
pnpm run preview

# Preview with bundle analyzer
pnpm run preview -- --report
```

### Code Quality
```bash
# Lint and fix code
pnpm run lint

# Lint only (without auto-fix)
pnpm run lint -- --fix

# Use plop.js for scaffolding new components
pnpm run new
```

## Architecture Overview

### Core Technology Stack
- **Vue 2.6.10** with Composition API (`@vue/composition-api`)
- **Element UI 2.13.2** as the UI framework
- **Vuex 3.1.0** for state management
- **Vue Router 3.0.2** for routing
- **Protocol Buffers** as the primary API communication protocol

### Protocol Buffer Architecture

This application uses Protocol Buffers extensively for all API communications. The key components:

1. **API Layer** (`src/api/`)
   - Each service has its own API file (e.g., `erp.js`, `game.js`)
   - All API calls encode data using protobuf before sending
   - Responses are decoded automatically via axios interceptors

2. **Protobuf Definitions** (`src/proto/`)
   - Common definitions in `proto.js` (EnumCode, CommonResult, etc.)
   - Service-specific definitions (ERP, Game, IM, etc.)
   - Generated using `protobufjs-cli`

3. **Request Interceptor** (`src/utils/request.js`)
   - Automatically wraps all requests in `HttpRequest` message
   - Handles token management and versioning
   - Encodes/decodes protobuf messages

### IM (Instant Messaging) Service

Real-time communication powered by WebSocket:

1. **Service Layer** (`src/service/im/`)
   - `index.js` - Main IM service singleton
   - `websocket.js` - WebSocket connection management with auto-reconnect
   - `codec.js` - Message encoding/decoding utilities
   - `constants.js` - Command and message type definitions

2. **Key Features**
   - Persistent WebSocket connection
   - Room-based chat (public/private)
   - Session management
   - Message status tracking (read/unread)
   - Auto-reconnection with exponential backoff

### Micro-frontend Support

Built with Wujie framework for micro-frontend architecture:

1. **Container Application** - Main admin shell
2. **Child Applications** - Can be loaded dynamically
   - Example: `/child/app` route loads a child app
   - Communication between apps via postMessage

### Dynamic Routing System

Routes are generated based on user permissions:

1. **Permission System** (`src/store/modules/permission.js`)
   - Fetches permission tree from backend
   - Dynamically generates accessible routes
   - Filters routes based on user roles

2. **Route Structure** (`src/router/`)
   - `constantRoutes` - Always accessible routes
   - `asyncRoutes` - Dynamically loaded based on permissions
   - `routerData2Router` - Converts backend permission data to routes

### Business Modules

The application is organized into business modules:

1. **ERP** (`/erp`) - Enterprise Resource Planning
   - Production, Purchase, Sales, Inventory management

2. **Game Management** (`/game`) - Gaming platform features
   - Lucky draws, prize configurations, battle rounds
   - System user management

3. **Device Management** (`/device`) - IoT device monitoring

4. **Organization** (`/organization`) - Organizational structure

5. **Workflow** (`/workflow`) - Business process management

### State Management

Vuex store is organized into modules:

- `app` - Application settings and layout
- `user` - User authentication and profile
- `permission` - Route and permission management
- `tagsView` - Navigation tabs
- `settings` - Theme and system settings
- `errorLog` - Error tracking

### Key Architectural Patterns

1. **Service-First Design**
   - All business logic is encapsulated in service classes
   - Services are imported and used in Vue components
   - Decoupled from UI components

2. **Protobuf-Only Communication**
   - No JSON API endpoints (except for mock data)
   - All requests use `application/x-protobuf` content type
   - Automatic encoding/decoding in request interceptor

3. **Dynamic Component Loading**
   - Components are loaded dynamically based on permissions
   - Lazy loading for all route components
   - Code splitting optimized for performance

4. **Error Handling Strategy**
   - Global error handling in axios interceptors
   - Automatic logout on token expiry
   - Centralized error logging and display

### Environment Configuration

- **Development**: `https://api.wwengg.cn` backend
- **Staging**: Deployed with nginx configuration
- **Production**: Optimized build with asset compression

### Development Notes

- When adding new API services, create both the API file and protobuf definition
- Use the existing service pattern for consistency
- Follow the dynamic route generation for new modules
- IM service requires proper initialization before use
- Micro-frontend apps need to be registered in the router configuration
- This project uses pnpm as the package manager