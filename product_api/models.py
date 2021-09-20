from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class product(models.Model):
    user_linked = models.ForeignKey(User,on_delete=models.CASCADE,related_name='product',null=True)
    product_name = models.CharField(max_length=100)
    product_description = models.TextField()
    product_quantity = models.IntegerField()
    product_price = models.FloatField()

    def __str__(self) -> str:
        return f'{self.user_linked} - {self.product_name} - product'