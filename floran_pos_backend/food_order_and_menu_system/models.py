from django.db import models
from bill_of_material.models import Bill_of_material

class Combo(models.Model):
    comboName = models.CharField(max_length=15)
    comboPrice = models.FloatField()
    comboPriceAfterDiscount = models.FloatField()
    comboItems = models.ManyToManyField(Bill_of_material)