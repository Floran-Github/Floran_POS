from django.db import models
from restaurant_inventory_api.models import FloorInventory
from django.contrib.auth.models import User
class Bill_of_material(models.Model):
    name = models.CharField(max_length=100)
    userLinked = models.ForeignKey(User,on_delete=models.CASCADE)
    production_cost = models.FloatField()
    price = models.FloatField()
    description = models.TextField()   
    receipe = models.TextField()
    photo = models.ImageField(upload_to='billOfMaterial')
    is_in_menu = models.BooleanField(default=False)
    is_drink = models.BooleanField(default=False)
    is_nonVeg = models.BooleanField(default=False)
    

    def __str__(self):
        return self.name

class Bill_of_material_Floor_Inventory_item(models.Model):
    bomAssociated = models.ForeignKey(Bill_of_material,on_delete=models.CASCADE)
    itemAssociated = models.ForeignKey(FloorInventory,on_delete=models.CASCADE)
    quantityUsed = models.FloatField()

    def __str__(self):
        return f'Bill of material item - {self.itemAssociated}'

class Bill_of_material_Kitchen_Inventory_item(models.Model):
    bomAssociated = models.ForeignKey(Bill_of_material,on_delete=models.CASCADE)
    kitchenitemAssociated = models.ForeignKey(Bill_of_material,on_delete=models.CASCADE,related_name="bill_of_material_Item")
    quantityUsed = models.FloatField()

    def __str__(self):
        return f'Bill of material item - {self.itemAssociated}'
