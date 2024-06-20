# Generated by Django 4.2 on 2023-05-01 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_alter_services_content_alter_services_icon'),
    ]

    operations = [
        migrations.CreateModel(
            name='PopularItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('src', models.CharField(max_length=70)),
                ('name', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
            ],
        ),
    ]
