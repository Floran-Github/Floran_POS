from django.db import models
from django.contrib.auth.models import User
from supplier_api.models import *


class AllinStatePurchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    supplier = models.ForeignKey(supplier, on_delete=models.CASCADE)
    invNumber = models.CharField(max_length=50)
    total_amount = models.FloatField(default=0)

    def __str__(self):
        return f'{self.user.username} {self.invNumber}'


class AllOutStatePurchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    supplier = models.ForeignKey(supplier, on_delete=models.CASCADE)
    invNumber = models.CharField(max_length=50)
    total_amount = models.FloatField(default=0)

    # def __str__(self):
    #     return f'{self.user.username} {self.invNumber}'


class inStatePurchase(models.Model):
    gst = [
        ('5', '5%'),
        ('12', '12%'),
        ('18', '18%'),
        ('28', '28%'),
    ]

    instateInv = models.ForeignKey(
        AllinStatePurchase, on_delete=models.CASCADE)
    product = models.CharField(max_length=200)
    product_price = models.FloatField(default=0)
    product_cgst = models.CharField(max_length=10, choices=gst)
    product_sgst = models.CharField(max_length=10, choices=gst)
    quantity = models.IntegerField()
    total = models.FloatField()

    @property
    def total_price(self):
        return int(self.product_price) * int(self.quantity)

    @property
    def cgst_price(self):
        cgst = int(self.product_cgst.split('%')[0])
        return ((int(self.product_price) * int(self.quantity)) * cgst) / 100

    @property
    def sgst_price(self):
        sgst = int(self.product_sgst.split('%')[0])
        return ((int(self.product_price) * int(self.quantity)) * sgst) / 100

class OutStatePurchase(models.Model):
    gst = [
        ('5', '5%'),
        ('12', '12%'),
        ('18', '18%'),
        ('28', '28%'),
    ]

    outstateInv = models.ForeignKey(
        AllOutStatePurchase, on_delete=models.CASCADE)
    product = models.CharField(max_length=200)
    product_price = models.FloatField(default=0)
    product_gst = models.CharField(max_length=10, choices=gst)
    quantity = models.IntegerField()
    total = models.FloatField()

    # def __str__(self):
    #     return self.outstateInv

    @property
    def total_price(self):
        return int(self.product_price) * int(self.quantity)

    @property
    def gst_price(self):
        gst = int(self.product_gst.split('%')[0])
        return ((int(self.product_price) * int(self.quantity)) * gst) / 100
