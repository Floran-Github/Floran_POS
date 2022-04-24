from django.db import models
from bill_of_material.models import Bill_of_material
from django.contrib.auth.models import User

from room_booking_api.models import CustomerDetail

class Combo(models.Model):
    userLinked = models.ForeignKey(User,on_delete=models.CASCADE,related_name="combo",null=True)
    comboName = models.CharField(max_length=15)
    comboImage = models.ImageField(upload_to='combo')
    comboPrice = models.FloatField()
    comboPriceAfterDiscount = models.FloatField()
    comboItems = models.ManyToManyField(Bill_of_material)

    def __str__(self) -> str:
        return self.comboName

class Order(models.Model):
    userLinked = models.ForeignKey(User,on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomerDetail,on_delete=models.CASCADE)
    orderNumber = models.IntegerField()
    orderDate = models.DateField(auto_now=True)
    orderPrice = models.FloatField()

    def __str__(self) -> str:
        return f"{self.userLinked} order number : {self.orderNumber}"

class OrderBomItems(models.Model):
    orderAssociated = models.ForeignKey(Order,on_delete=models.CASCADE)
    bomAssociated = models.ForeignKey(Bill_of_material,on_delete=models.CASCADE)
    qty = models.IntegerField()
    totolAmount = models.FloatField()

    def __str__(self) -> str:
        return f'BOM Item No: {self.pk}'

class OrderComboItems(models.Model):
    orderAssociated = models.ForeignKey(Order,on_delete=models.CASCADE)
    comboAssociated = models.ForeignKey(Combo,on_delete=models.CASCADE)
    qty = models.IntegerField()
    totolAmount = models.FloatField()

    def __str__(self) -> str:
        return f'Combo Item No: {self.pk}'