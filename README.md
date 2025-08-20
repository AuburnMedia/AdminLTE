# EcoTrack Django Project

A Django-based carbon tracking dashboard application converted from AdminLTE frontend.

## Features

- 🌱 **Carbon Usage Tracking**: Monitor and track carbon footprint over time
- 📊 **Interactive Charts**: Chart.js powered visualizations for data insights
- 🎯 **Goal Setting**: Set and track carbon reduction goals
- 📈 **Analytics Dashboard**: Comprehensive overview of usage patterns
- 👤 **User Management**: Personal profiles and authentication
- 📱 **Responsive Design**: AdminLTE-based responsive interface

## Quick Start

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Database Setup**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Create Superuser** (Optional)
   ```bash
   python manage.py createsuperuser
   ```

5. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

6. **Access the Application**
   - Dashboard: http://127.0.0.1:8000/
   - Admin Panel: http://127.0.0.1:8000/admin/

## Project Structure

```
ecotrack_project/
├── ecotrack_project/          # Django project settings
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── dashboard/                 # Main dashboard app
│   ├── models.py             # Carbon tracking models
│   ├── views.py              # Dashboard views
│   ├── urls.py               # URL patterns
│   └── admin.py              # Admin configuration
├── templates/                # Django templates
│   ├── base.html
│   └── dashboard/
├── static/                   # Static files (CSS, JS, Images)
│   ├── css/
│   ├── js/
│   └── assets/
└── requirements.txt
```

## Models

### CarbonUsage
- Track daily carbon usage estimates
- Store percentage changes over time
- Link to user accounts

### CarbonGoal
- Personal carbon reduction targets
- Progress tracking
- Target date management

### FootprintAssessment
- Footprint calculator results
- Recommendations storage
- Assessment history

## API Endpoints

- `/` - Main dashboard
- `/profile/` - User profile management
- `/reports/` - Carbon usage reports
- `/calculator/` - Footprint calculator
- `/admin/` - Django admin interface

## Technologies Used

- **Backend**: Django 5.0.1
- **Frontend**: AdminLTE 4.0, Bootstrap 5
- **Charts**: Chart.js 4.4.0
- **Database**: SQLite (development), PostgreSQL (production ready)
- **Icons**: Bootstrap Icons

## Development

### Adding New Features

1. Create models in `dashboard/models.py`
2. Add views in `dashboard/views.py`
3. Create templates in `templates/dashboard/`
4. Update URLs in `dashboard/urls.py`
5. Run migrations

### Static Files

Static files are organized as:
- `static/css/` - AdminLTE CSS files
- `static/js/` - AdminLTE and Chart.js files
- `static/assets/` - Images and other assets

## Production Deployment

1. Set `DEBUG=False` in settings
2. Configure proper database (PostgreSQL recommended)
3. Set up static file serving
4. Configure allowed hosts
5. Use environment variables for secrets

## License

This project uses AdminLTE which is licensed under MIT License.
