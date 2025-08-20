# EcoTrack Django Setup

This project has been templated to support both static HTML and Django deployment.

## 🏗️ **Architecture Overview**

### **Current State**
- ✅ **Static HTML Files**: Working with Python HTTP server (`index.html`, `detailed.html`, etc.)
- ✅ **Django Templates**: Ready for Django deployment (`templates/dashboard/`)
- ✅ **Jinja Templating**: All Django templates use proper Jinja syntax
- ✅ **URL Routing**: Django URL patterns configured
- ✅ **Shared Components**: Navbar and sidebar templates created

## 📁 **File Structure**

```
ecotrack_project/
├── templates/                          # Django Templates
│   ├── base.html                      # Base template with shared layout
│   └── dashboard/
│       ├── includes/
│       │   ├── navbar.html            # Top navigation bar
│       │   └── navigation.html        # Sidebar navigation
│       ├── index.html                 # Dashboard template
│       ├── detailed.html              # Detailed info template
│       ├── impact.html                # Impact page template
│       ├── checkup.html               # Footprint estimator template
│       └── reports.html               # Reports template
├── dashboard/                          # Django App
│   ├── urls.py                        # URL patterns
│   ├── views.py                       # View functions
│   └── models.py                      # Data models
├── ecotrack_project/                   # Django Project
│   ├── urls.py                        # Main URL config
│   └── settings.py                    # Django settings
├── static/                            # Static assets
│   └── js/
│       └── ecotrack-data.js           # Shared data model
├── index.html                         # Static HTML (current)
├── detailed.html                      # Static HTML (current)
├── impact.html                        # Static HTML (current)
├── checkup.html                       # Static HTML (current)
└── reports.html                       # Static HTML (current)
```

## 🚀 **Django URL Patterns**

```python
# dashboard/urls.py
urlpatterns = [
    path('', views.dashboard_view, name='index'),           # /
    path('detailed/', views.detailed_view, name='detailed'), # /detailed/
    path('impact/', views.impact_view, name='impact'),       # /impact/
    path('checkup/', views.checkup_view, name='checkup'),    # /checkup/
    path('reports/', views.reports_view, name='reports'),    # /reports/
    path('profile/', views.profile_view, name='profile'),    # /profile/
    path('calculator/', views.footprint_calculator_view, name='calculator'), # /calculator/
]
```

## 🔗 **Template Navigation**

All Django templates use proper URL routing:

```html
<!-- Navbar Links -->
<a href="{% url 'dashboard:index' %}">Home</a>

<!-- Sidebar Navigation -->
<a href="{% url 'dashboard:index' %}" class="nav-link">Dashboard</a>
<a href="{% url 'dashboard:checkup' %}" class="nav-link">Calculate Footprint</a>
<a href="{% url 'dashboard:detailed' %}" class="nav-link">Detailed Information</a>
<a href="{% url 'dashboard:impact' %}" class="nav-link">Impact</a>
<a href="{% url 'dashboard:reports' %}" class="nav-link">Your Reports</a>

<!-- Breadcrumbs -->
<li class="breadcrumb-item"><a href="{% url 'dashboard:index' %}">Home</a></li>
```

## ⚙️ **Setup Instructions**

### **Option 1: Static HTML (Current)**
```bash
# Already working with Python HTTP server
python3 -m http.server 8000
```

### **Option 2: Django Deployment**
```bash
# Install Django
pip install django

# Run migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Run Django development server
python manage.py runserver 0.0.0.0:8000
```

## 🎯 **Features Implemented**

### **Template Includes**
- ✅ **`navbar.html`**: Top navigation with user info and controls
- ✅ **`navigation.html`**: Sidebar with active page highlighting
- ✅ **`base.html`**: Shared layout with CSS/JS blocks

### **URL Integration**
- ✅ **Dynamic Active States**: `{% if request.resolver_match.url_name == 'index' %}active{% endif %}`
- ✅ **Proper URL Names**: All links use `{% url 'dashboard:page_name' %}`
- ✅ **Breadcrumb Navigation**: Context-aware breadcrumbs

### **Jinja Features Used**
- ✅ **Template Inheritance**: `{% extends 'base.html' %}`
- ✅ **Block Overrides**: `{% block content %}`, `{% block extra_css %}`
- ✅ **URL Generation**: `{% url 'dashboard:index' %}`
- ✅ **Static Files**: `{% static 'js/ecotrack-data.js' %}`
- ✅ **Conditional Logic**: Active navigation states
- ✅ **User Context**: `{{ user.first_name|default:user.username }}`

## 🔄 **Migration Path**

When ready to switch to Django:

1. **Update Dev Server**: Change from `python3 -m http.server` to `python manage.py runserver`
2. **Install Dependencies**: Ensure Django is available
3. **Run Migrations**: Set up database schema
4. **Update Links**: All templates already use Django URL patterns
5. **Test Navigation**: All sidebar/navbar links will work automatically

## 📊 **Data Integration**

Both versions use the same JavaScript data model (`static/js/ecotrack-data.js`) ensuring:
- ✅ **Consistent Calculations**: Same CO₂ algorithms
- ✅ **Shared Functionality**: Charts, progress tracking, goal management
- ✅ **Smooth Transition**: No data migration needed

## 🎨 **Styling**

All styling remains consistent between static and Django versions:
- ✅ **AdminLTE Integration**: Same CSS framework
- ✅ **Bootstrap Icons**: Consistent iconography  
- ✅ **Custom Styles**: Same gradient and color schemes
- ✅ **Responsive Design**: Mobile-first approach maintained

The Django templates are production-ready and will seamlessly replace the static HTML files when Django is properly installed and configured.
