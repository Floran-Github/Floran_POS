from django.db import models
from product_api.models import *
from django.contrib.auth.models import User
from django.utils import timezone

class FloorInventory(models.Model):
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE,related_name='floorinventory')
    product = models.ForeignKey(product,on_delete=models.CASCADE)
    qty = models.IntegerField(default=0)

    def __str__(self) -> str:
        return f'{self.user_linked} floor inventory of product {self.product}'


class InventoryOrder(models.Model):
    user_linked = models.ForeignKey(User, on_delete=models.CASCADE)
    order_name = models.CharField(max_length=30)
    memo = models.TextField()
    issued_on = models.DateField(auto_now=True)
    delievery_date = models.DateField(default=timezone.now)
    approved = models.BooleanField(default=False)
    remark = models.TextField(null=True,blank=True)

    def __str__(self):
        return f'{self.user_linked} - order no = {self.pk}'
    

class InventoryOrderItems(models.Model):
    order = models.ForeignKey(InventoryOrder, on_delete=models.CASCADE,related_name='orders')
    product = models.ForeignKey(product, on_delete=models.CASCADE,related_name='product')
    quantity = models.IntegerField()

    def __str__(self):
        return f'{self.product} item for {self.order.order_name}'
class InventoryOrderNewItems(models.Model):
    order = models.ForeignKey(InventoryOrder, on_delete=models.CASCADE,related_name='new_orders')
    product_name = models.CharField(max_length=100)
    product_description = models.TextField()
    product_quantity = models.IntegerField()
    def __str__(self):
        return f'{self.product} item for {self.order.order_name}'
    