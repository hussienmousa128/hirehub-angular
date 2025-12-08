# HireHub Copilot Instructions

## Project Overview
HireHub is an Angular 20.3 hiring platform application using standalone components with zoneless change detection. The project follows modern Angular patterns with a feature-based architecture and shared utilities layer.

## Architecture & Key Patterns

### Standalone Components & Config-Based Setup
- **No NgModules**: All components use the `standalone: true` pattern imported directly
- **AppConfig pattern**: `src/app/app.config.ts` centralizes application configuration
- **Zoneless change detection**: `provideZonelessChangeDetection()` enabled for better performance
- **Bootstrap**: `bootstrapApplication()` in `main.ts` (no traditional `AppModule`)

### Project Structure
```
src/app/
├── core/           # Singleton services, guards, interceptors, models
├── features/       # Feature modules (applications, auth, dashboard, jobs)
├── shared/         # Reusable components, directives, pipes
└── app.*           # Root component, routing, config
```

### Routing Architecture
Routes are defined in `src/app/app.routes.ts` as a `Routes` array. Currently empty; add feature routes using lazy loading patterns with `loadChildren` for feature modules.

### Signal-Based State Management
Components use Angular Signals (`signal()`) for reactive state. Example in `app.ts`:
```typescript
export class App {
  protected readonly title = signal('hirehub');
}
```

## Development Workflows

### Starting Development
```bash
npm start          # ng serve - runs on http://localhost:4200
npm run build      # ng build - production build
npm run watch      # ng build --watch - development watch mode
npm test           # ng test - runs Karma + Jasmine tests
```

### Code Generation
Use Angular schematics to generate components (defaults to SCSS):
```bash
ng generate component features/auth/login      # Creates component in feature
ng generate service core/services/auth         # Creates service in core
ng generate guard core/guards/auth             # Creates guard
```

### VS Code Integration
- **Launch configs** (`.vscode/launch.json`): `ng serve` and `ng test` with Chrome debugging
- **Tasks** (`.vscode/tasks.json`): npm scripts configured with problem matchers
- **Recommended extension**: `angular.ng-template` for template intellisense

## Build & Test Configuration

### Angular.json Key Settings
- **Component stylesheet**: SCSS (configured in schematics)
- **Global styles**: `src/styles.scss` (includes Tailwind directives)
- **Assets**: Public folder static files
- **Production budgets**: 500kB initial, 1MB max; 4kB/8kB per-component styles
- **Default config**: Production (use `ng serve` for development)

### Testing Setup
- **Framework**: Karma + Jasmine
- **tsConfig**: `tsconfig.spec.json` for test compilation
- **Example test**: `src/app/app.spec.ts` shows component fixture pattern
- **Convention**: `*.spec.ts` for test files colocated with source

## Styling & CSS

### Tailwind CSS Integration
- **Framework**: Tailwind v4 with PostCSS/Autoprefixer
- **Global entry**: `src/styles.scss` imports `@tailwind` directives
- **Config**: `tailwind.config.js` at workspace root (content pattern set)
- **PostCSS config**: `postcss.config.cjs` enables Tailwind plugin
- **Component styles**: SCSS with `.scss` files, scoped by component

### SCSS Usage
- **Prettier format**: Single quotes, 100 char width, Angular HTML parser
- **Editor config**: 2-space indents, trailing newline on save
- **Component example**: `app.scss` scoped to `app-root` selector

## Project-Specific Patterns

### Component Patterns
- **Selector prefix**: `app-` (configured in angular.json)
- **Imports array**: Explicitly import dependencies in `@Component({ imports: [...] })`
- **Templates**: External `templateUrl`, styles external `styleUrl` (not inline)
- **Change detection**: Relies on zoneless detection + Signals for reactivity

### Service Patterns
Place in `src/app/core/services/`. Consider dependency injection via `inject()` function for cleaner code vs constructor injection.

### Guards & Interceptors
- **Guards**: `src/app/core/guards/` for route protection (auth, role-based, etc.)
- **Interceptors**: `src/app/core/interceptors/` for HTTP request/response handling
- Register in `appConfig` providers

### Feature Module Organization
Each feature (`auth`, `dashboard`, `jobs`, `applications`) contains:
- Components (feature-specific)
- Route definitions
- Local services
- Models/types

## External Dependencies & Versions
- **Angular**: ^20.3.0 (latest modern Angular)
- **RxJS**: ~7.8.0 (for observables)
- **Tailwind**: ^4.1.17 (latest v4)
- **TypeScript**: ~5.9.2
- **Testing**: Karma ~6.4.0, Jasmine ~5.9.0

## Productivity Tips
1. **Run tests in watch mode**: `npm test` watches for changes
2. **Generate schematics**: Always use `ng generate` to ensure consistent patterns
3. **Check budgets before production**: `ng build` compares against `angular.json` budgets
4. **Use Angular language service**: Installed by CLI for template type-checking
5. **Branch pattern**: Currently on `feature/project-structure` - follow PR-based workflow
