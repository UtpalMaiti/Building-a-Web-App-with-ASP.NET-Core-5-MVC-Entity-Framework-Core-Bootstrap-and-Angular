﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;

namespace DutchTreat.Data
{
  public class DutchSeeder
  {
    private readonly DutchContext _ctx;
    private readonly IWebHostEnvironment _hosting;

    public DutchSeeder(DutchContext ctx, IWebHostEnvironment hosting)
    {
      _ctx = ctx;
      _hosting = hosting;
    }

    public void Seed()
    {
      _ctx.Database.EnsureCreated();

      if (!_ctx.Products.Any())
      {
        // Need to create the Sample Data
        var file = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
        var json = File.ReadAllText(file);
        var products = JsonSerializer.Deserialize<IEnumerable<Product>>(json);
        _ctx.Products.AddRange(products);

        var order = _ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();
        if (order != null)
        {
          order.Items  = new List<OrderItem>()
          {
            new OrderItem()
            {
              Product = products.First(),
              Quantity = 5,
              UnitPrice = products.First().Price
            }
          };
        }

        _ctx.SaveChanges();
      }
    }
  }
}
