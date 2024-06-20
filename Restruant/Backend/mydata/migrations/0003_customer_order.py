# Generated by Django 4.2 on 2023-05-12 03:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mydata', '0002_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=14)),
                ('card_number', models.CharField(max_length=50)),
                ('card_expiry', models.CharField(max_length=15)),
                ('card_cvc', models.CharField(max_length=18)),
                ('address', models.CharField(max_length=500)),
                ('postal_code', models.CharField(max_length=20)),
                ('delivery_fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('service_fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(max_length=100)),
                ('item_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mydata.customer')),
            ],
        ),
    ]
