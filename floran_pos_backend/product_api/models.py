from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class product(models.Model):
    PRODUCT_TYPE = [
        ('edible','Edible'),
        ('non-edible','Non-Edible')
    ]

    PRODUCT_WEIGHT_CATEGORY = [
        ('kilogram','Kilogram'),
        ('gram','Gram'),
        ('litre','Litre'),
        ('ml','Mili Litre'),
        ('pieces','Pieces'),
    ]
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE,related_name='product',null=True)
    product_name = models.CharField(max_length=100)
    product_description = models.TextField()
    product_quantity = models.IntegerField()
    product_type = models.CharField(max_length=10,choices=PRODUCT_TYPE,default='edible')
    product_weight_category = models.CharField(max_length=10,choices=PRODUCT_WEIGHT_CATEGORY,default='kilogram')
    product_weight_per_quantity = models.IntegerField(default=0)
    product_price = models.FloatField()
    totalquanitity = models.IntegerField(default=0)


    def __str__(self) -> str:
        return f'{self.user_linked} - {self.product_name} - product'