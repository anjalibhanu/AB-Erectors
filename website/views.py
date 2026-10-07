from django.shortcuts import render, redirect
from .models import Service, Project, Enquiry, Review


def home(request):
    services = Service.objects.all()
    projects = Project.objects.all()

    for project in projects:
        project.project_images = list(project.images.all())
        project.preview_images = project.project_images[:4]
        project.extra_image_count = max(
            0,
            len(project.project_images) - 4
        )

    reviews = Review.objects.all()

    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        message = request.POST.get("message")

        Enquiry.objects.create(
            name=name,
            phone=phone,
            email=email,
            message=message,
        )

        return redirect("home")

    return render(
        request,
        "index.html",
        {
            "services": services,
            "projects": projects,
            "reviews": reviews,
        },
    )