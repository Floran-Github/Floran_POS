from django.db import models
from django.contrib.auth.models import User
from bill_of_material.models import Bill_of_material
class kitchenInventory(models.Model):
    userLinked = models.ForeignKey(User,on_delete=models.CASCADE)
    invProduct = models.ForeignKey(Bill_of_material,on_delete=models.CASCADE)
    qty = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return f'{self.userLinked} - {self.invProduct}'
